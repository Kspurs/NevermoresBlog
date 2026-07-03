const { existsSync, readdirSync, rmSync } = require("node:fs")
const { homedir } = require("node:os")
const { dirname, delimiter, join } = require("node:path")
const { spawnSync } = require("node:child_process")

const requiredMajor = 20
const currentMajor = Number(process.versions.node.split(".")[0])
const projectRoot = join(__dirname, "..")
const gatsbyCli = join(projectRoot, "node_modules", "gatsby", "cli.js")
const args = process.argv.slice(2)

function findNode20() {
  const versionsDir = join(homedir(), ".nvm", "versions", "node")
  if (!existsSync(versionsDir)) return null

  const versions = readdirSync(versionsDir)
    .filter(version => version.startsWith(`v${requiredMajor}.`))
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))

  const executable = versions[0] && join(versionsDir, versions[0], "bin", "node")
  return executable && existsSync(executable) ? executable : null
}

const nodeExecutable = currentMajor === requiredMajor ? process.execPath : findNode20()

if (!nodeExecutable) {
  console.error("This project requires Node 20. Run `nvm install 20` and try again.")
  process.exit(1)
}

if (currentMajor !== requiredMajor) {
  console.log(`Switching Gatsby from Node ${process.versions.node} to Node 20...`)
  // Gatsby's LMDB cache is ABI-sensitive and may have been written by Node 25.
  rmSync(join(projectRoot, ".cache"), { recursive: true, force: true })
}

const result = spawnSync(nodeExecutable, [gatsbyCli, ...args], {
  cwd: projectRoot,
  env: {
    ...process.env,
    PATH: `${dirname(nodeExecutable)}${delimiter}${process.env.PATH || ""}`,
    GATSBY_TELEMETRY_DISABLED: "1",
  },
  stdio: "inherit",
})

if (result.error) {
  console.error(result.error.message)
  process.exit(1)
}

if (result.signal) {
  process.kill(process.pid, result.signal)
}

process.exit(result.status ?? 1)
