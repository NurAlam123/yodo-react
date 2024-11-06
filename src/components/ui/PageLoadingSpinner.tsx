import BrandName from "./BrandName"

const PageLoadingSpinner = ({ brand }: { brand?: boolean }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="size-24 border-8 border-s-sky-500 rounded-full animate-spin"></div>
      {brand && (
        <div className="mt-16">
          <BrandName noSubtitle noLink />
        </div>
      )}
    </div>
  )
}

export default PageLoadingSpinner