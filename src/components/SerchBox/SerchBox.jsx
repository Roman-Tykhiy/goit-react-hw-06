import s from "./SerchBox.module.css"


const SerchBox = ({serchValue}) => {
  return (
    <>
      <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
      <input className={s.input} name="name" onChange={serchValue} />
      </div>
      
    </>
    
  )

}
export default SerchBox;