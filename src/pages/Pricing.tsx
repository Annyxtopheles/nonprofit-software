import { Navigate } from "react-router-dom";

/** Legacy /pricing route — the single source of truth is /control-tower/pricing. */
const Pricing = () => <Navigate to="/control-tower/pricing" replace />;

export default Pricing;
