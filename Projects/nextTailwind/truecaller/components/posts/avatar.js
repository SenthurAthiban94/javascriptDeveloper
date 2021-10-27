import {dateNth} from './../../utils/date';
const avatar = ({picture=false, author=false, date=false})=>{
    return <div className="grid sm:grid-cols-10 grid-cols-4 gap-1">
        <div className="col-start-1 sm:col-end-2 col-end-2 flex flex-wrap justify-start items-center">
            {picture && <img className="shadow row-span-3 rounded-full h-14 w-14" src={picture}/>}
        </div>
        <div className="col-start-2 sm:col-start-2 sm:col-end-12 col-end-8 flex flex-col flex-wrap justify-center items-start">
            <div className="text-bold text-sm mb-1">{author || 'Anonymous'}</div>
            {date && <div className="text-xs text-gray-500">{dateNth(new Date(date))}</div>}
        </div>
    </div>
}
export default avatar;