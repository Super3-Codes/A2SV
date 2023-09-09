import React, {useEffect, useRef, useState} from 'react';
import {AiFillLike} from 'react-icons/ai'
export default function Modal({isModalOpen,closeModal,insertComment,commentList}) {
    const modalClasses = isModalOpen ? 'fixed inset-0   flex justify-center items-center z-50' : 'hidden';
    const [userComment,setUserComment] = useState("")
    const commentsContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the comments container whenever commentList changes
        if (commentsContainerRef.current) {
            commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
        }
    }, [commentList]);

    const handleOnclick = () =>{
        insertComment(userComment)
        setUserComment('')
    }


    return (
        <div className={modalClasses}>

            <section className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">

                <h3 className="text-lg font-semibold mb-2">
                    {commentList.length > 0 ? 'Comments' : 'Add Comment'}
                </h3>

                {commentList.length > 0 && (
                    <div   ref={commentsContainerRef} style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                        <ul>
                            {commentList.map((comment, index) => (
                                <div className={"flex flex-row items-start items-center"} key={index}>
                                    <li className={"w-full mx-4 my-2 text-xs text-slate-500 font-medium line-clamp-3"}>
                                        {comment}
                                    </li>
                                    <AiFillLike className={"mx-4 mb-2"} size={14} cursor={"pointer"}/>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}


                <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mb-4"
                    required
                    aria-label="Comment Text"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                />
                <button
                    type="button"

                    className="w-full my-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-4 py-2"
                    onClick={() => handleOnclick()}
                    aria-label="Close Modal"
                >
                    Add Comment
                </button>
                <button
                    type="button"
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg text-sm px-4 py-2"
                    onClick={closeModal}
                    aria-label="Close Modal"
                >
                    Close
                </button>
            </section>
        </div>
    );


}
