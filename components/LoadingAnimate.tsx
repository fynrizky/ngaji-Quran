import style from './style.module.scss'
export default function LoadingAnimate() {
  return (
    <div className={style.loading}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}