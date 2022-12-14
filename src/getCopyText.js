import parsePhoneNumber, { isPossiblePhoneNumber } from 'libphonenumber-js';

export default function getCopyText({ name, position, pronouns, email, phone }) {
  const isNumber = isPossiblePhoneNumber(phone, 'US') ? true : '';

  const number = parsePhoneNumber(phone, 'US');

  return `
  <table padding="0" cellspacing="0" border="0" style="width: 480px; max-with: 100%; text-align: right;font-family: 'Arial', sans-serif;color: #395064;">
    <tr>
      <td style="width: 50%;">
        <div style="font-family: 'Arial', sans-serif;color: #395064;">
          <div style="height: 100px;">                                                 
            <img src="https://convergeaccess.org/wp-content/themes/converge/dist/Converge_tag_color-300.png" alt="Converge: Partners in Access" width="175" style="" />
          </div>
          <p style="margin: 0; font-size: 12px; text-decoration: none; color: black;">715 South Pear Orchard Road</p>
          <p style="margin: 0; font-size: 12px; text-decoration: none; color: black;">Suite 402</p>
          <p style="margin: 0; font-size: 12px; text-decoration: none; color: black;">Ridgeland, MS 39157</p>
          ${
            isNumber &&
            `<a style="margin: 0; font-size: 12px; text-decoration: none; color: #5ec7b1;" href="${number.getURI()}">${number.formatNational()}</a>`
          }
        </div>
      </td>
      <td style="text-align: left;">
        
        <p style="padding-left: 20px;font-size: 20px;font-weight: bold;text-transform: uppercase;margin: 0; margin-top: 50px;" id="name">${name}</p>
        ${position && `<p style="padding-left:20px;color:#5ec7b1;margin:0;font-weight:bold;font-size:14px;" id="position">${position}</p>`}
        ${pronouns && `<p style="padding-left: 20px; font-style: italic; margin: 0; font-size: 12px;" id="pronouns">${pronouns}</p>`}
      
        <a style="padding-left: 20px;text-decoration: none;color: #395064;margin-bottom: 0px;display: block;font-size: 14px;" href="mailto:${email}" id="email">${email}</a>
        <a style="color: #008eaa;text-decoration: none;display: block;font-size: 12px;display: flex;align-items: center;margin: 0;padding-left: 20px;" href="https://www.facebook.com/convergepartners">
          <img src="https://convergeaccess.org/wp-content/uploads/2022/10/converge-social-icon-03.png" width="20" style="margin-right: 5px;" alt="Follow on Facebook: @convergepartners" />
          convergepartners
        </a>
        <a style="display: block;color: #008eaa;text-decoration: none;font-size: 12px;display: flex;align-items: center;margin: 0;padding-left: 20px;" href="https://www.instagram.com/converge.ms/">
          <img src="https://convergeaccess.org/wp-content/uploads/2022/10/converge-social-icon-04.png" width="20" style="margin-right: 5px;" alt="Follow on Instagram: @converge.ms" />
          converge.ms
        </a>
        <a style="display: block;color: #008eaa;text-decoration: none;font-size: 12px;display: flex;align-items: center;margin: 0;padding-left: 20px;" href="https://twitter.com/ConvergeMS">
          <img src="https://convergeaccess.org/wp-content/uploads/2022/10/converge-social-icon-02.png" width="20" style="margin-right: 5px;" alt="Follow on Twitter: @ConvergeMS" />
          ConvergeMS
        </a>
        <p style="color: #5ec7b1; font-weight: 600;font-size: 12px;padding-left: 20px; margin: 0;">
          <a style="color: #5ec7b1;text-decoration: none;" href="https://convergeaccess.org" target="_blank">convergeaccess.org</a>
          |
          <a style="color: #5ec7b1;text-decoration: none;" href="https://personally.care" target="_blank">personally.care</a>
        </p>
      </td>
    </tr>
  </table>
    
    `;
}
