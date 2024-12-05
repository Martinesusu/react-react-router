import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm productId={id} />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default EditProductPage;
