import {BiComment} from "react-icons/bi"

export default function Comment({count}) {
    return(
        <div className={"flex items-center"}>
            <BiComment size={16} color={"gray"}/>
            <p className={"text-xs text-slate-700 mx-2 "}>{count} Likes</p>
        </div>
    )
}