import { FooterContainer, FooterLink } from "./footer.style";

export function Footer() {
  const links = ["Copyright &copy; 2023 Dell Inc.", "Privacy", "Terms of Use", "Accessibility"];

  return (
    <FooterContainer className="dds__py-4 dds__px-3 dds__px-lg-5 dds__body-2">
      <div className="dds__container">
        <div className="dds__row">
          <div className="dds__col">
            <div className="dds__d-flex dds__flex-column dds__flex-lg-row">
              {links.map((link, index) => (
                <FooterLink
                  key={index}
                  href="#"
                  className={`dds__link--standalone ${index < links.length - 1 ? "dds__mb-4 dds__mb-lg-0 dds__mr-lg-5" : ""}`}
                  dangerouslySetInnerHTML={{ __html: link }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}
