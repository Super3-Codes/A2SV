import React, { useState } from "react";
import Divider from "./divider";
import Comment from "./comment";
import ReadMore from "./readMore";
import Tags from "./tags";
import Title from "./title";
import Avatar from "./avatar";
import Author from "./author";
import Description from "./description";
import Modal from "./modal";

export default function Card(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const insertComment = (comment) =>{
        if(comment !== null && comment) {
            setCommentList([...commentList, comment]);
        }
    }
    return (
        <section className="m-8 flex flex-col w-[250px] h-[360px] bg-white rounded-md shadow-md">
            <img
                className="rounded-t-md"
                src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg"
                alt="Image"
                style={{ height: "200px" }} // Use CSS style for image height
            />
            <Title  title={props.title} />
            <div className=" flex flex-row mt-2">
                <Avatar avatarUrl={props.avatarUrl} />
                <Author author={props.name} />
            </div>
            <section className="flex flex-row mt-2 text-gray-600">
                {props.tags.map((tag, index) => (
                    <Tags key={index} tagName={tag} />
                ))}
            </section>
            <div className={"my-1"}>  <Description  description={props.description} /> </div>

            <Divider />
            <section className="my-4 py-2 mx-3 flex flex-row justify-between items-end mt-auto">
                <Comment count={props.commentCount} />
                <ReadMore  openModal={() => setIsModalOpen(true)}/> {/* Corrected function name */}
            </section>

            {isModalOpen && <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} insertComment={insertComment} commentList={commentList} />} {/* Render the modal if isModalOpen is true */}
        </section>
    );
}
