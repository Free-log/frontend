import { useParams } from "react-router-dom";

function Profile() {
  const { postId } = useParams();

  return <div>post Id : {postId}'s Comments</div>;
}

export default Profile;
