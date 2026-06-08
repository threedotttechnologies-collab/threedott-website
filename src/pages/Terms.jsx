import LegalPageLayout from "../components/LegalPageLayout"
import { termsContent } from "../constants/legalContent"

export default function Terms() {
  return (
    <LegalPageLayout
      title={termsContent.title}
      sections={termsContent.sections}
    />
  )
}
