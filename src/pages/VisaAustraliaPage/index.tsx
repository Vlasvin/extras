import Visa from "components/Visa";
import { imagesAustralia } from "services/images";

const VisaAustralia = () => (
  <Visa
    titleKey="visa_australia.title"
    images={imagesAustralia}
    stepsKey="visa_australia.steps"
    costsKey="visa_australia.costs"
    costTitleKey="visa_australia.cost_title"
    documentsKey="visa_australia.documents"
    applyButtonKey="visa_australia.apply_button"
    descriptionKey="visa_australia.description"
  />
);

export default VisaAustralia;
