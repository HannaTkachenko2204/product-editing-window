import editIcon from "../assets/icons/edit.svg";
import backArrowIcon from "../assets/icons/back-arrow.svg";
import forwardArrowIcon from "../assets/icons/forward-arrow.svg";
import maximizeIcon from "../assets/icons/maximize.svg";
import closeIcon from "../assets/icons/close.svg";
import moreIcon from "../assets/icons/more.svg";
import openLinkIcon from "../assets/icons/open-link.svg";
import photoDevice from "../assets/images/device.png";
import photoDataPlate from "../assets/images/plate.png";

export function ProductEditingWindow(): HTMLElement {
    const modal = document.createElement("div");
    modal.className = "modal";
  
    modal.appendChild(createHeader());
    modal.appendChild(createBody());
    modal.appendChild(createFooter());
  
    return modal;
  }

function createHeader(): HTMLElement {
  const header = document.createElement("header");
  header.className = "modal__header";
  header.innerHTML = `
    <h2 class="modal__title">G112082</h2>
    <div class="modal__header-controls">
      <button class="modal__header-btn" type="button">
        <img src="${editIcon}" alt="Edit" />Edit
      </button>
      <div class="modal__header-controls-divider"></div>
      <div>
        <img src="${backArrowIcon}" alt="Back Arrow" />
        <img src="${forwardArrowIcon}" alt="Forward Arrow" />
      </div>
      <img src="${maximizeIcon}" alt="Maximize" />
      <img src="${closeIcon}" alt="Close" />
    </div>
    `;
  return header;
}

function createBody(): HTMLElement {
  const body = document.createElement("section");
  body.className = "modal__body";
  body.appendChild(createProductFormSection());
  body.appendChild(createListLocationTableSection());
  return body;
}

function createFooter(): HTMLElement {
    const footer = document.createElement("footer");
    footer.className = "modal__footer";
    footer.innerHTML = `
        <button class="modal__footer-btn--primary" type="button">Expand</button>
        <button class="modal__footer-btn--secondary" type="submit">Add</button>
      `;
    return footer;
  }

function createProductFormSection(): HTMLElement {
  const section = document.createElement("section");
  section.className = "product-form";
  section.innerHTML = `
    <div class="product-form__field-box">
      <div class="product-form__field">
        <span class="product-form__label">Brand</span>
        <div class="product-form__value-box">
          <span class="product-form__value">NEC</span>
          <img src="${moreIcon}" alt="More" />
        </div>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Model/Series</span>
        <span class="product-form__value">P401W</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Devise P/N</span>
        <span class="product-form__value">NP-P401W / NP23LP+</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Dev. Type</span>
        <span class="product-form__value">2013,4000,1280,16:10,LCD</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">RNK</span>
        <span class="product-form__value">237</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Min price</span>
        <span class="product-form__value">57,19</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Max price</span>
        <span class="product-form__value">100,97</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Quantity</span>
        <span class="product-form__value">3 376</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">EPrq</span>
        <span class="product-form__value">65</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">EA4q</span>
        <span class="product-form__value">6</span>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">Photo_device</span>
        <div class="product-form__value-box">
          <span class="product-form__value">https://drive.google.com...</span>
          <img src="${openLinkIcon}" alt="Open link" />
        </div>
      </div>
    </div>

    <div class="product-form__divider"></div>

    <div class="product-form__field-box">
      <div class="product-form__field">
        <span class="product-form__label">Sku</span>
        <div class="product-form__value-box">
          <span class="product-form__value">???/P,Ne_P401W/??G112082</span>
          <img src="${moreIcon}" alt="More" />
        </div>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">L-user</span>
        <div class="product-form__value-box">
          <span class="product-form__value">Iryna</span>
          <img src="${moreIcon}" alt="More" />
        </div>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">Category</span>
        <div class="product-form__value-box">
          <span class="product-form__value">Projector</span>
          <img src="${moreIcon}" alt="More" />
        </div>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">e-user</span>
        <div class="product-form__value-box">
          <span class="product-form__value">Script</span>
          <img src="${moreIcon}" alt="More" />
        </div>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">green_id</span>
        <span class="product-form__value">Y</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">edit_at</span>
        <span class="product-form__value">30.8.2024 12:32</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">create_at</span>
        <span class="product-form__value">30.8.2024 12:32</span>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">amazon listing src</span>
        <div class="product-form__value-box">
          <span class="product-form__value">https://www.amazon.com...</span>
          <img src="${openLinkIcon}" alt="Open link" />
        </div>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">eLCCq</span>
        <span class="product-form__value">0</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">amazq</span>
        <span class="product-form__value">9</span>
      </div>
      <div class="product-form__field product-form__field--text-only">
        <span class="product-form__label">Notes</span>
        <span class="product-form__value">--------------------</span>
      </div>
    </div>

    <div class="product-form__divider"></div>

    <div class="product-form__img-box">
      <div>
        <span class="product-form__img-name">Photo_device</span>
        <img
          class="product-form__img"
          src="${photoDevice}"
          alt="Photo device"
        />
      </div>

      <div>
        <span class="product-form__img-name">Photo_data_plate</span>
        <img
          class="product-form__img"
          src="${photoDataPlate}"
          alt="Photo data plate"
        />
      </div>
    </div>
    `;
  return section;
}

function createListLocationTableSection(): HTMLElement {
  const section = document.createElement("section");
  section.className = "list-location-table__section";
  //   section.innerHTML = `
  //       <h3>List Location</h3>
  //       <table class="product-table">
  //         <thead>
  //           <tr>
  //             <th>ID</th><th>Brand</th><th>Category</th><th>Device P/N</th><th>Qty</th><th>Condition</th><th>Edit User</th><th>Notes</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>G112082</td><td>NEC</td><td>Projectors</td><td>CP34B</td><td>52</td><td>U/Ref</td><td>Script</td><td>No Lamp</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     `;
  return section;
}
