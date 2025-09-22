import React from 'react'
import SectionHeading from './SectionHeading'

const Educations = () => {
  return (
    <>
    {/* Educations */}
      <section>
        <SectionHeading title="Educations" />
        <label>Degree title</label>
        <table width="100%">
          <tr>
            <td>University name</td> <td align="right">Graduation: year</td>
          </tr>
        </table>
      </section>
    </>
  )
}

export default Educations