import { BounceLoader } from "react-spinners";

const Loading = ({ loading }) => {
    return (
        <div className="bg-transparent flex justify-center items-center w-[100%] lg:my-[22%] md:my-[55%] my-[100%]">
            <BounceLoader
                color="#36d7b7"
                loading={loading}
                size={100}
            />
        </div>
    )
}

export default Loading

