import Image from 'next/image';
import md from './../../utils/mdRenderer';
import dateTimeDiff from '../../utils/date';

const Card = ({date= false,title = false, slug=false, thumbnail = false,category= false})=>{
    if(!title && !thumbnail && !category ) return null;
    const postTitle = md(title);
    return <article className="bg-primary shadow cursor-pointer grid grid-flow-row auto-rows-max md:auto-rows-min">
    <div className="px-3 py-4 text-black text-xs font-bold capitalize flex flex-wrap justify-start items-center gap-1">
        { Object.keys(category).map(cat=>{
            return <div key={category[cat].ID} className="mr-1"><div className="inline-block h-2 w-2 rounded-full bg-secondary mr-1"></div>{cat}</div>
        }) }
    </div>
    <div className="relative w-full h-44 sm:h-32 md:h-40 lg:h-36 xl:h-44 shadow">
        <Image
            alt={title}
            src={thumbnail || '/assets/placeholder.png'}
            layout={'fill'}
            objectFit={'cover'}
        />
    </div>
    <div className="p-4 lg:p-5 h-full">
        <h3 className="font-bold text-sm md:text-md lg:text-lg max-h-14 line-clamp-2 mb-2" title={postTitle} dangerouslySetInnerHTML={{__html: postTitle}}></h3>
        {
            date && <div className="text-xs text-gray-500">
                {dateTimeDiff(new Date(date))} ago
            </div>   
        }
    </div>
  </article>
}

export default Card;