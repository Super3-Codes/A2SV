import React from "react"; // Don't forget to import React
import Divider from "./divider";
import Comment from "./comment";
import ReadMore from "./readMore";
import Tags from "./tags";
import Title from "./title";
import Avatar from "./avatar";
import Author from "./author";
import Description from "./description";

export default function Card(props) {
    return (
        <section className="m-8 flex flex-col w-[250px] h-[345px] bg-white rounded-md shadow-md">
            <img
                className={"rounded-t-md"}
                src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg"
                alt="Image"
                height="200"

            />
            <Title  title={props.title} />

            <div className="mb-2 flex flex-row">
                <Avatar avatarUrl={props.avatarUrl} />
                <Author author={props.name} />

            </div>
            <section className="flex flex-row my-2 text-gray-600">
                {props.tags.map((tag, index) => (
                    <Tags key={index} tagName={tag} />
                ))}
            </section>

            <Description description={props.description}></Description>
            <Divider />
            <section className="m-2 flex flex-row justify-between items-center mt-auto">
                <Comment count={props.commentCount} /> {/* Pass the comment count as a prop */}
                <ReadMore />
            </section>

            {/* Use the "value" property from props */}

        </section>
    );
}
