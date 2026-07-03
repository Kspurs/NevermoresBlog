import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as styles from "./for-yeling.module.css"

const getDaysTogether = () => {
  const now = new Date()
  // 这里默认从今年 3 月 5 日开始计算；如需指定年份，修改第一个参数即可。
  const start = Date.UTC(now.getFullYear(), 2, 5)
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.max(0, Math.floor((today - start) / 86_400_000))
}

const ForYelingPage: React.FC<PageProps> = () => {
  const [step, setStep] = React.useState(0)
  const daysTogether = getDaysTogether()

  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <section className={styles.card} aria-live="polite">
        {step === 0 && (
          <div className={styles.content} key="intro">
            <p className={styles.eyebrow}>A little secret</p>
            <h1 className={styles.title}>我知道你是谁</h1>
            <p className={styles.subtext}>不相信吗？那就试试看。</p>
            <button className={styles.button} type="button" onClick={() => setStep(1)}>
              我不信
            </button>
          </div>
        )}

        {step === 1 && (
          <div className={styles.content} key="answer">
            <p className={styles.eyebrow}>I knew it</p>
            <h1 className={`${styles.title} ${styles.titleMedium}`}>
              你的名字是<span className={styles.accent}>叶玲</span>
              <br />
              你有一个可爱的宝宝叫<span className={styles.accent}>梁嘉琛</span>
            </h1>
            <button className={styles.button} type="button" onClick={() => setStep(2)}>
              真的哎
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.content} key="days">
            <p className={styles.eyebrow}>Together, every day</p>
            <h1 className={`${styles.title} ${styles.titleMedium}`}>
              你和宝宝已经在一起
              <span className={`${styles.days} ${styles.accent}`}>{daysTogether}</span>
              天了
            </h1>
            <span className={styles.heart} aria-label="爱心">♥</span>
          </div>
        )}
      </section>
    </main>
  )
}

export default ForYelingPage

export const Head: HeadFC = () => (
  <>
    <html lang="zh-CN" />
    <title>给叶玲的悄悄话</title>
    <meta name="description" content="一封给叶玲的小小惊喜" />
    <meta name="theme-color" content="#f5f5f7" />
  </>
)
