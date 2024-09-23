import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function Job({ job }) {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>{" "}
        <Button variant='outline' className='rounded-full' size='icon'>
          <Bookmark />
        </Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button className='p-6' variant='outline' size='icon'>
          <Avatar>
            <AvatarImage src='data:image/png;base64,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' />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <Badge className={"text-blue-700 font-bold"} variant='ghost'>
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant='ghost'>
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant='ghost'>
          {job?.salary}LPA
        </Badge>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant='outline'
        >
          Details
        </Button>
        <Button className='bg-[#7209b7]'>Save For Later</Button>
      </div>
    </div>
  );
}

export default Job;
