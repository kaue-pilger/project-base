import { useEffect, useState } from "react"

function Header({ className }) {
  const [selectedMenu, setSelectedMenu] = useState(null)
  const handleSelectMenu = (id) => {
    setSelectedMenu((prevSelectedMenu) => (prevSelectedMenu === id ? null : id));
  }

  const menuMobileIsSelected = (id) => selectedMenu === id

  const [selectedSection, setSelectedSection] = useState(null)
  const handleSelectSection = (id) => {
    setSelectedSection(id === selectedSection ? id : id)
  }

  useEffect(() => { setSelectedSection(1) }, [])

  const sections = [
    {id: 1, name: "Link", href: "#"},
    {id: 2, name: "Link", href: "#"},
    {id: 3, name: "Link", href: "#"},
  ]

  return (
    <header className={`${className} pos-rel f-bet a-center w-100`} >
      <a href="#" className="f-row a-center j-start w-2/12 h-12/12 z-3 b3 link">
        Link
      </a>
      <nav className="d-none-mob">
        <ul className="f-row gap-1">
          {sections.map((section) => (
            <li key={section.id} className="d-inline-b">
              <a href={section.href} className={`pos-rel b3 link ${section.id === selectedSection ? 'link--active' : ''}`} onClick={() => handleSelectSection(section.id)}>
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button 
        className={`pos-abs r-0 d-none f-col-mob f-center-mob dec-gap-8 z-3 menu-toggle ${menuMobileIsSelected(1) ? 'menu-toggle--active' : ''}`} 
        onClick={() => handleSelectMenu(1)}
      >
        <span className="b-radius menu-toggle__line"></span>
        <span className="b-radius menu-toggle__line"></span>
        <span className="b-radius menu-toggle__line"></span>
      </button>
      <nav className={`d-none pos-fix w-100 h-100 z-2 ${menuMobileIsSelected(1) ? 'f-col f-center t-a-center menu-mobile' : ''}`}>
        <ul className="d-none f-col-mob gap-2">
          <li className="d-none f-col-mob gap-1">
            {sections.map((section) => (
              <li key={section.id} onClick={() => handleSelectMenu(1)} className="d-inline-b">
                <a href={section.href} className={`pos-rel b3 link ${section.id === selectedSection ? 'link--active' : ''}`} onClick={() => handleSelectSection(section.id)}>
                  {section.name}
                </a>
              </li>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  )
} export default Header
