function TitleAndSubtitle({title, subtitle, className}) {
  return (
    <div className={`f-col f-center w-10/12 t-a-center gap-2 ${className}`}>
      <h2>{title}</h2>
      <p className="b2">{subtitle}</p>
    </div>
  )
} export default TitleAndSubtitle
