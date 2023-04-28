import { BounceLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="my-[100%] flex w-[100%] items-center justify-center bg-transparent md:my-[55%] lg:my-[22%]">
      <BounceLoader color="#36d7b7" loading={loading} size={100} />
    </div>
  );
};

export default Loading;
