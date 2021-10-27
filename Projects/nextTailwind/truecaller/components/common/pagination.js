import { useRouter } from 'next/router';

const Pagination = ({
    total=0,
    limit=20,
    paginationRangeLimit=5,
    currentPage=1,
    onChange=false
})=>{
    const totalPages = Math.ceil(total/limit);
    const router = useRouter();

    const isNextAvailable = ()=>Boolean((currentPage+1)<=totalPages);
    const isPrevAvailable = ()=>Boolean((currentPage-1)>0);
    const moveToPage = (page)=>{
        let nextPage = page;
        if(page==='...'){
            let currentGroup = getPaginationGroup();
            nextPage = currentGroup[paginationRangeLimit-1]+1;
        }
        updateActiveTab(nextPage);
    }
    const updateActiveTab = (changedPage)=>{
        const {page,...restQueries} = router.query;
        router.push({
            pathname: '/',
            query: { 
                ...restQueries,
                ...(changedPage>1 ? {page: changedPage} : {})
            },
        }, undefined, { shallow: true });
        onChange && onChange(changedPage);
    }
    const movePrevious = ()=>isPrevAvailable() && updateActiveTab(currentPage-1);
    const moveNext = ()=>isNextAvailable() && updateActiveTab(currentPage+1);
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / paginationRangeLimit) * paginationRangeLimit;
        const finalList = new Array(paginationRangeLimit).fill().map((_, idx) => start + idx + 1);
        const groupMaxPage = finalList[finalList.length-1];
        if(groupMaxPage>totalPages){
            return new Array(paginationRangeLimit-(groupMaxPage-totalPages)).fill().map((_, idx) => start + idx + 1);
        }
        if(totalPages>groupMaxPage){
            finalList.push('...');
            finalList.push(totalPages);
        }
        return finalList;
    };

  const disablePrevBtn = !isPrevAvailable();
  const disableNextBtn = !isNextAvailable();
  const groupedPages = getPaginationGroup();
  return (
    <div className="py-4 flex flex-col items-center justify-center">
        <nav className="relative z-0 inline-flex rounded-md items-center" aria-label="Pagination">
            <button name="previous"  role="button" className="relative inline-flex items-center rounded-l-md px-2  sm:px-4 sm:py-2 text-sm font-bold text-gray-500 hover:text-secondary" disabled={disablePrevBtn} onClick={movePrevious}>
                <span className="hidden">Prev</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative inline-flex justify-center items-center h-6 w-6 sm:h-8 sm:w-8 rounded-full text-sm font-bold" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            {
                groupedPages.map((page)=>{
                    return <button role="button" name="currentPage" key={page} aria-current="page" className={`relative inline-flex items-center text-sm font-bold px-2 sm:px-4 sm:py-2 ${currentPage===page ? 'bg-secondary rounded-full text-white' : 'text-gray-500 hover:text-secondary'}`} onClick={()=>moveToPage(page)}>
                        {page}
                    </button>
                })
            }
            <button name="next" role="button" className="relative inline-flex items-center rounded-l-md px-2  sm:px-4 sm:py-2 text-sm font-bold text-gray-500 hover:text-secondary" disabled={disableNextBtn} onClick={moveNext}>
                <span className="hidden">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative inline-flex justify-center items-center h-6 w-6 sm:h-8 sm:w-8 rounded-full text-sm font-bold" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </nav>
    </div>
  )
}
export default Pagination;