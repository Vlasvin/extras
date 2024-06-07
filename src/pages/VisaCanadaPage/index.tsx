import Visa from "components/Visa";
import { imagesCanada } from "services/images";

const VisaCanada: React.FC = () => (
  <Visa
    titleKey="visa_canada.title"
    images={imagesCanada}
    stepsKey="visa_canada.steps"
    costsKey="visa_canada.costs"
    costTitleKey="visa_canada.cost_title"
    documentsKey="visa_canada.documents"
    applyButtonKey="visa_canada.apply_button"
    descriptionKey="visa_canada.description"
    pageName="VisaCanada"
  />
);

export default VisaCanada;
