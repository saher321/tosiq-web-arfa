const Resume = () => {
    return (
        <>
            {/* Personal */}
            <section style={{textAlign: "center"}}>
                <h1>Michael Harris</h1>
                <h4>Digital Marketing | Content Marketing | SEO</h4>
                <p>Lahore, Pakistan | abc@email.com | +92 313 45 67 890 | linkedin.com/in/accountname123</p>
            </section>

            {/* Summary / About */}
            <section>
                <h1 style={{borderBottom: "2px solid #333"}}>Summary</h1>
                <p>
                    The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content. The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," written in 45 BC.
                </p>
            </section>
            
            {/* Experience */}
            <section>
                <h1 style={{borderBottom: "2px solid #333"}}>Experience</h1>
                <label>Marketing Manager</label>
                <table width="100%">
                    <tr>
                        <td>Company Name</td> <td align="right">Duration</td>
                    </tr>
                </table>
                <ul>
                    <li>
                        The short answer is that lorem ipsum text doesn't actually "say" anything meaningful. It's deliberately scrambled Latin that doesn't form coherent sentences. While it comes from Cicero's "De Finibus Bonorum et Malorum," the text has been modified so extensively that it's nonsensical.
                    </li>
                    <li>
                        The short answer is that lorem ipsum text doesn't actually "say" anything meaningful. It's deliberately scrambled Latin that doesn't form coherent sentences. While it comes from Cicero's "De Finibus Bonorum et Malorum," the text has been modified so extensively that it's nonsensical.
                    </li>
                </ul>

                <label>Content Writer</label>
                <table width="100%">
                    <tr>
                        <td>Company Name</td> <td align="right">Duration</td>
                    </tr>
                </table>
                <ul>
                    <li>
                        The short answer is that lorem ipsum text doesn't actually "say" anything meaningful. It's deliberately scrambled Latin that doesn't form coherent sentences. While it comes from Cicero's "De Finibus Bonorum et Malorum," the text has been modified so extensively that it's nonsensical.
                    </li>
                    <li>
                        The short answer is that lorem ipsum text doesn't actually "say" anything meaningful. It's deliberately scrambled Latin that doesn't form coherent sentences. While it comes from Cicero's "De Finibus Bonorum et Malorum," the text has been modified so extensively that it's nonsensical.
                    </li>
                </ul>
            </section>
            
            {/* Eduction */}
            <section>
                <h1 style={{borderBottom: "2px solid #333"}}>Educations</h1>
                <label>Degree title</label>
                <table width="100%">
                    <tr>
                        <td>University name</td> <td align="right">Graduation: year</td>
                    </tr>
                </table>
            </section>
            
            {/* Skills */}
            <section>
                <h1 style={{borderBottom: "2px solid #333"}}>Skills</h1>
                <ul>
                    <li>Frontend: HTML, CSS, BOOTSTRAP, TAILWIND, JS, REACTJS</li>
                    <li>Backend: Laravel, NodeJs, Express, MongoDB, MYSQL</li>
                </ul>
            </section>
            
            {/* Certifications */}
            <section>
                <h1 style={{borderBottom: "2px solid #333"}}>Certifications</h1>
                <ul>
                    <li>Clound Computing</li>
                    <li>Shopify</li>
                </ul>
            </section>
        </>
    )
}

export default Resume