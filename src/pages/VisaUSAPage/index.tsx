import Visa from "components/Visa";
import { imagesUSA } from "services/images";

const VisaUSA: React.FC = () => (
  <Visa
    titleKey="visa_usa.title"
    images={imagesUSA}
    stepsKey="visa_usa.steps"
    costTitleKey="visa_usa.cost_title"
    costsKey="visa_usa.costs"
    documentsKey="visa_usa.documents"
    applyButtonKey="visa_usa.apply_button"
    descriptionKey="visa_usa.description"
    pageName="VisaUsa"
  />
);

export default VisaUSA;
