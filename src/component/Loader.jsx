

const Loader = () => {
     return (
          <>
               <div className="flex flex-row gap-2">
                    <div className="animate-pulse bg-gray-400 w-16 h-20 rounded-lg">
                    </div>
                    <div className="flex flex-col gap-2">
                         <div className="animate-pulse bg-gray-400 w-40 h-5 rounded-lg"></div>
                         <div className="animate-pulse bg-gray-400 w-48 h-4 rounded-lg"></div>
                         <div className="animate-pulse bg-gray-400 w-88 h-7 rounded-lg"></div>
                    </div>
               </div>
          </>
     )
}

export default Loader
