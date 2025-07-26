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
        <img class="modal__header-icon" src="${editIcon}" alt="Edit" />Edit
      </button>
      <div class="modal__header-controls-divider"></div>
      <div>
        <img class="modal__header-icon" src="${backArrowIcon}" alt="Back Arrow" />
        <img class="modal__header-icon" src="${forwardArrowIcon}" alt="Forward Arrow" />
      </div>
      <img class="modal__header-icon" src="${maximizeIcon}" alt="Maximize" />
      <img class="modal__header-icon" src="${closeIcon}" alt="Close" />
    </div>
    `;
  return header;
}

function createBody(): HTMLElement {
  const body = document.createElement("section");
  body.className = "modal__body";
  body.appendChild(createProductFormSection());
  body.appendChild(createListLocationTableSection());
  body.appendChild(createListEbayTableSection());
  body.appendChild(createSameProductsTableSection());
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
          <img class="product-form__icon" src="${moreIcon}" alt="More options" />
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
          <img class="product-form__icon" src="${openLinkIcon}" alt="Open link" />
        </div>
      </div>
    </div>

    <div class="product-form__divider"></div>

    <div class="product-form__field-box">
      <div class="product-form__field">
        <span class="product-form__label">Sku</span>
        <div class="product-form__value-box">
          <span class="product-form__value">???/P,Ne_P401W/??G112082</span>
          <img class="product-form__icon" src="${moreIcon}" alt=" options" />
        </div>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">L-user</span>
        <div class="product-form__value-box">
          <span class="product-form__value">Iryna</span>
          <img class="product-form__icon" src="${moreIcon}" alt="More options" />
        </div>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">Category</span>
        <div class="product-form__value-box">
          <span class="product-form__value">Projector</span>
          <img class="product-form__icon" src="${moreIcon}" alt="More options" />
        </div>
      </div>
      <div class="product-form__field">
        <span class="product-form__label">e-user</span>
        <div class="product-form__value-box">
          <span class="product-form__value">Script</span>
          <img class="product-form__icon" src="${moreIcon}" alt="More options" />
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
          <img class="product-form__icon" src="${openLinkIcon}" alt="Open link" />
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
  section.className = "list-table";
  section.innerHTML = `
  <div class="list-table__header">
    <h3 class="list-table__title">List Location</h3>
    <span class="list-table__badge">6</span>
  </div>

  <table class="list-table__table">
  <colgroup>
      <col style="width: 135px;">
      <col style="width: 163px;">
      <col style="width: 172px;">
      <col style="width: 172px;">
      <col style="width: 97px;">
      <col style="width: 173px;">
      <col style="width: 156px;">
      <col>
  </colgroup>
    <thead>
      <tr>
        <th>ID</th>
        <th>Brand</th>
        <th>Category</th>
        <th>Device P/N</th>
        <th>Gty</th>
        <th>Condition</th>
        <th>Edit User</th>
        <th>Notes</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>G112082</td>
        <td>NEC</td>
        <td>Projectors</td>
        <td>CP34B</td>
        <td>52</td>
        <td>U/Ref</td>
        <td>Script</td>
        <td>No Lamp</td>
        <td><img class="list-table__icon" src="${moreIcon}" alt="More options" /></td>
      </tr>
      <tr>
        <td>G112082</td>
        <td>NEC</td>
        <td>Projectors</td>
        <td>CP34B</td>
        <td>52</td>
        <td>U/Ref</td>
        <td>Script</td>
        <td>No Lamp</td>
        <td><img class="list-table__icon" src="${moreIcon}" alt="More options" /></td>
      </tr>
      <tr>
        <td>G112082</td>
        <td>NEC</td>
        <td>Projectors</td>
        <td>CP34B</td>
        <td>52</td>
        <td>U/Ref</td>
        <td>Script</td>
        <td>No Lamp</td>
        <td><img class="list-table__icon" src="${moreIcon}" alt="More options" /></td>
      </tr>
      <tr>
        <td>G112082</td>
        <td>NEC</td>
        <td>Projectors</td>
        <td>CP34B</td>
        <td>52</td>
        <td>U/Ref</td>
        <td>Script</td>
        <td>No Lamp</td>
        <td><img class="list-table__icon" src="${moreIcon}" alt="More options" /></td>
      </tr>
    </tbody>
  </table>
      `;
  return section;
}

function createListEbayTableSection(): HTMLElement {
  const section = document.createElement("section");
  section.className = "list-table";
  section.innerHTML = `
  <div class="list-table__header">
    <h3 class="list-table__title">list ebay vision listings</h3>
    <span class="list-table__badge">53</span>
  </div>

  <table class="list-table__table">
  <colgroup>
      <col style="width: 193px;">
      <col style="width: 228px;">
      <col style="width: 173px;">
      <col style="width: 155px;">
      <col style="width: 354px;">
      <col style="width: 94px;">
      <col style="width: 156px;">
      <col>
  </colgroup>
    <thead>
      <tr>
        <th>Listing_id</th>
        <th>SKU</th>
        <th>condition_id</th>
        <th>product_id</th>
        <th>title</th>
        <th>price</th>
        <th>listing_qty</th>
        <th class="list-table__cell">inventory_q</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>325064386872</td>
        <td>SRQ/P,Ne_ME331X...</td>
        <td>UEG122535</td>
        <td>G122535</td>
        <td>3300 ANSI 3LCD Projector 1080p...</td>
        <td>114,27</td>
        <td>274</td>
        <td class="list-table__start">3 376</td>
      </tr>
      <tr>
        <td>325064386872</td>
        <td>SRQ/P,Ne_ME331X...</td>
        <td>UEG122535</td>
        <td>G122535</td>
        <td>3300 ANSI 3LCD Projector 1080p...</td>
        <td>114,27</td>
        <td>274</td>
        <td class="list-table__start">3 376</td>
      </tr>
      <tr>
        <td>325064386872</td>
        <td>SRQ/P,Ne_ME331X...</td>
        <td>UEG122535</td>
        <td>G122535</td>
        <td>3300 ANSI 3LCD Projector 1080p...</td>
        <td>114,27</td>
        <td>274</td>
        <td class="list-table__start">3 376</td>
      </tr>
      <tr>
        <td>325064386872</td>
        <td>SRQ/P,Ne_ME331X...</td>
        <td>UEG122535</td>
        <td>G122535</td>
        <td>3300 ANSI 3LCD Projector 1080p...</td>
        <td>114,27</td>
        <td>274</td>
        <td class="list-table__start">3 376</td>
      </tr>
    </tbody>
  </table>
      `;
  return section;
}

function createSameProductsTableSection(): HTMLElement {
  const section = document.createElement("section");
  section.className = "list-table__last";
  section.innerHTML = `
  <div class="list-table__header">
    <h3 class="list-table__title">Same Products</h3>
    <span class="list-table__badge">1</span>
  </div>

  <table class="list-table__table">
  <colgroup>
      <col style="width: 169px;">
      <col style="width: 140px;">
      <col>
      <col>
  </colgroup>
    <thead>
      <tr>
        <th>Original_id</th>
        <th>same_id</th>
        <th>fk_edit_employee</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>G112082</td>
        <td>G900559</td>
        <td>Script</td>
        <td><img class="list-table__icon" src="${moreIcon}" alt="More options" /></td>
      </tr>
    </tbody>
  </table>
      `;
  return section;
}
