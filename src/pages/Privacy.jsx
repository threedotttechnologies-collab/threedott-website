import LegalPageLayout from "../components/LegalPageLayout"
import { privacyContent } from "../constants/legalContent"

export default function Privacy() {
  return (
    <LegalPageLayout
      title={privacyContent.title}
      sections={privacyContent.sections}
    />
  )
}
