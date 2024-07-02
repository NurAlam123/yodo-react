import { Link } from "react-router-dom"
import { links } from "../../constants"

const BrandName = ({
  noTitle,
  noSubtitle,
  noLink
}: {
  noTitle?: boolean,
  noSubtitle?: boolean,
  noLink?: boolean
}) => {
  return (
    <div className="flex flex-col">
      {!noTitle && <h1 className={`text-6xl font-bold text-sky-500 antialiased font-lora`}>
        {
          !noLink ? <Link to={links.home}>Yodo.</Link> : "Yodo."
        }
      </h1>}
      {!noSubtitle && <h6 className="text-sm ms-10 text-neutral-400">List down your todo.</h6>}
    </div>
  )
}

export default BrandName