const icons = {
    bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M13.35,17.401l-4.201,0l0,-3.601l4.201,0c0.997,0 1.801,0.805 1.801,1.801c0,0.996 -0.804,1.8 -1.801,1.8m-4.201,-10.802l3.601,0c0.996,0 1.801,0.804 1.801,1.8c0,0.996 -0.805,1.801 -1.801,1.801l-3.601,0m6.722,1.548c1.164,-0.816 1.98,-2.149 1.98,-3.349c0,-2.712 -2.1,-4.801 -4.801,-4.801l-7.502,0l0,16.804l8.45,0c2.521,0 4.454,-2.04 4.454,-4.549c0,-1.825 -1.033,-3.385 -2.581,-4.105Z" style="fill-rule: nonzero;"></path></svg>',
    italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M8.617,3.658l0,3.575l2.633,0l-2.075,9.534l-3.325,0l0,3.575l9.533,0l0,-3.575l-2.633,0l2.075,-9.534l3.325,0l0,-3.575l-9.533,0Z" style="fill-rule: nonzero;"></path></svg>',
    headers:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M2.007,12.526l3.156,0l0,7.363l3.155,0l0,-7.363l3.156,0l0,-3.156l-9.467,0m6.311,-5.259l0,3.155l5.26,0l0,12.623l3.156,0l0,-12.623l5.259,0l0,-3.155l-13.675,0Z" style="fill-rule: nonzero;"></path></svg>',
    strikethrough:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M20.874,12.059l0,1.729l-3.541,0c0.806,1.851 0.766,6.918 -5.026,6.918c-6.721,0.043 -6.463,-5.621 -6.463,-5.621l3.203,0.044c0.024,2.914 2.55,2.914 3.05,2.879c0.516,-0.043 2.444,-0.034 2.598,-2.058c0.064,-0.942 -0.823,-1.66 -1.791,-2.162l-9.778,0l0,-1.729l17.748,0m-2.896,-3.554l-3.211,-0.026c0,0 0.137,-2.395 -2.646,-2.404c-2.783,-0.017 -2.541,1.902 -2.541,2.144c0.032,0.243 0.274,1.436 2.42,2.007l-5.074,0c0,0 -2.816,-5.82 4.057,-6.814c7.027,-1.038 7.011,5.11 6.995,5.093Z" style="fill-rule: nonzero;"></path></svg>',
    "lists-unordered":
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M7.043,4.695l14.61,0l0,2.087l-14.61,0l0,-2.087m0,8.349l0,-2.088l14.61,0l0,2.088l-14.61,0m-3.131,-8.871c0.866,0 1.566,0.699 1.566,1.565c0,0.867 -0.7,1.566 -1.566,1.566c-0.866,0 -1.565,-0.699 -1.565,-1.566c0,-0.866 0.699,-1.565 1.565,-1.565m0,6.262c0.866,0 1.566,0.699 1.566,1.565c0,0.866 -0.7,1.565 -1.566,1.565c-0.866,0 -1.565,-0.699 -1.565,-1.565c0,-0.866 0.699,-1.565 1.565,-1.565m3.131,8.87l0,-2.087l14.61,0l0,2.087l-14.61,0m-3.131,-2.609c0.866,0 1.566,0.699 1.566,1.566c0,0.866 -0.7,1.565 -1.566,1.565c-0.866,0 -1.565,-0.699 -1.565,-1.565c0,-0.867 0.699,-1.566 1.565,-1.566Z" style="fill-rule: nonzero;"></path></svg>',
    "lists-ordered":
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M7.235,13.059l14.825,0l0,-2.118l-14.825,0m0,8.471l14.825,0l0,-2.117l-14.825,0m0,-10.59l14.825,0l0,-2.117l-14.825,0m-5.295,6.353l1.906,0l-1.906,2.224l0,0.953l3.177,0l0,-1.059l-1.906,0l1.906,-2.224l0,-0.953l-3.177,0m1.059,-2.118l1.059,0l0,-4.235l-2.118,0l0,1.059l1.059,0m-1.059,12.707l2.118,0l0,0.529l-1.059,0l0,1.059l1.059,0l0,0.529l-2.118,0l0,1.059l3.177,0l0,-4.235l-3.177,0l0,1.059Z" style="fill-rule: nonzero;"></path></svg>',
    quote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M14.446,18.235l2.92,0l1.946,-4.988l0,-7.482l-5.839,0l0,7.482l2.92,0m-10.732,4.988l2.919,0l1.947,-4.988l0,-7.482l-5.839,0l0,7.482l2.919,0l-1.946,4.988Z" style="fill-rule: nonzero;"></path></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" class="icon"><path d="M 14.6,16.6L 19.2,12L 14.6,7.4L 16,6L 22,12L 16,18L 14.6,16.6 Z M 9.4,16.6L 4.8,12L 9.4,7.4L 8,6L 2,12L 8,18L 9.4,16.6 Z "></path></svg>',
    table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 5,4L 19,4C 20.1046,4 21,4.89543 21,6L 21,18C 21,19.1046 20.1046,20 19,20L 5,20C 3.89543,20 3,19.1046 3,18L 3,6C 3,4.89543 3.89543,4 5,4 Z M 5,8L 5,12L 11,12L 11,8L 5,8 Z M 13,8L 13,12L 19,12L 19,8L 13,8 Z M 5,14L 5,18L 11,18L 11,14L 5,14 Z M 13,14L 13,18L 19,18L 19,14L 13,14 Z "></path></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 10.5858,13.4142C 10.9763,13.8047 10.9763,14.4379 10.5858,14.8284C 10.1952,15.2189 9.56207,15.2189 9.17154,14.8284C 7.21892,12.8758 7.21892,9.70995 9.17154,7.75733L 9.17157,7.75736L 12.707,4.2219C 14.6596,2.26928 17.8255,2.26929 19.7781,4.2219C 21.7307,6.17452 21.7307,9.34034 19.7781,11.293L 18.2925,12.7785C 18.3008,11.9583 18.1659,11.1368 17.8876,10.355L 18.3639,9.87865C 19.5355,8.70708 19.5355,6.80759 18.3639,5.63602C 17.1923,4.46445 15.2929,4.46445 14.1213,5.63602L 10.5858,9.17155C 9.41419,10.3431 9.41419,12.2426 10.5858,13.4142 Z M 13.4142,9.17155C 13.8047,8.78103 14.4379,8.78103 14.8284,9.17155C 16.781,11.1242 16.781,14.29 14.8284,16.2426L 14.8284,16.2426L 11.2929,19.7782C 9.34026,21.7308 6.17444,21.7308 4.22182,19.7782C 2.26921,17.8255 2.2692,14.6597 4.22182,12.7071L 5.70744,11.2215C 5.69913,12.0417 5.8341,12.8631 6.11234,13.645L 5.63601,14.1213C 4.46444,15.2929 4.46444,17.1924 5.63601,18.3639C 6.80758,19.5355 8.70708,19.5355 9.87865,18.3639L 13.4142,14.8284C 14.5858,13.6568 14.5858,11.7573 13.4142,10.5858C 13.0237,10.1952 13.0237,9.56207 13.4142,9.17155 Z "></path></svg>',
    image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M 12.9994,8.99807L 18.4994,8.99807L 12.9994,3.49807L 12.9994,8.99807 Z M 5.99938,1.99809L 13.9994,1.99809L 19.9994,7.99808L 19.9994,19.9981C 19.9994,21.1021 19.1034,21.9981 17.9994,21.9981L 5.98937,21.9981C 4.88537,21.9981 3.99939,21.1021 3.99939,19.9981L 4.0094,3.99808C 4.0094,2.89407 4.89437,1.99809 5.99938,1.99809 Z M 6,20L 15,20L 18,20L 18,12L 14,16L 12,14L 6,20 Z M 8,9C 6.89543,9 6,9.89543 6,11C 6,12.1046 6.89543,13 8,13C 9.10457,13 10,12.1046 10,11C 10,9.89543 9.10457,9 8,9 Z "></path></svg>'
};

const EnumLabels = {
    TITLE: "Заголовок:",
    REPRODUCE_STEPS: "Шаги воспроизведения:",
    ACTUAL_RESULT: "Фактический результат:",
    EXPECTED_RESULT: "Ожидаемый результат:"
};

const log = (message) => {
    if (IS_DEBUG) {
        console.log(
            `%c[${PREFIX}]: ${message}`,
            "color: white; background: #1499c9; padding: 5px; border-radius: 5px;"
        );
    }
};

const form = document.getElementById("bt_form_data");
const blocks = form.querySelectorAll(".bt_hform_block.clear_fix");

const labelsToWrap = [
    EnumLabels.REPRODUCE_STEPS,
    EnumLabels.ACTUAL_RESULT,
    EnumLabels.EXPECTED_RESULT
];

let targetBlock = null;
const blocksToWrap = [];

blocks.forEach((block) => {
    const label = block.querySelector(".bt_hform_label");

    if (label) {
        if (labelsToWrap.includes(label.textContent.trim())) {
            blocksToWrap.push(block);
        }

        if (!targetBlock && label.textContent.trim() === EnumLabels.TITLE) {
            targetBlock = block;
        }
    }
});

if (blocksToWrap.length > 0) {
    const wrapper = document.createElement("div");
    wrapper.id = `${PREFIX}-wrapper`;
    wrapper.className = "bt_hform_block";

    const inputs = document.createElement("div");
    inputs.id = `${PREFIX}-inputs`;

    blocksToWrap.forEach((block) => {
        inputs.appendChild(block);
    });

    wrapper.appendChild(inputs);
    wrapper.innerHTML += `
<div id="${PREFIX}-actions">
    ${Object.keys(icons)
        .map((key) => `<button id="${PREFIX}-${key}">${icons[key]}</button>`)
        .join("")}
</div>
    `;

    if (targetBlock) {
        form.insertBefore(wrapper, targetBlock.nextSibling);
        log(`Обертка вставлена после "${EnumLabels.TITLE}".`);
    } else {
        log(
            `Блок с "${EnumLabels.TITLE}" не найден.\n\nform:`,
            form,
            "\n\nblock:",
            blocks,
            "\n\ntargetBlock:",
            targetBlock
        );
    }
} else {
    log(
        "Не найдено элементов для обертки.\n\nform:",
        form,
        "\n\nblock:",
        blocks,
        "\n\nblocksToWrap:",
        blocksToWrap
    );
}
