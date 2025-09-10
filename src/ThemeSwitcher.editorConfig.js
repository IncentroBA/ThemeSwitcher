import { hidePropertiesIn } from "@mendix/pluggable-widgets-tools";

/**
 * @typedef Property
 * @type {object}
 * @property {string} key
 * @property {string} caption
 * @property {string} description
 * @property {string[]} objectHeaders
 * @property {ObjectProperties[]} objects
 * @property {Properties[]} properties
 */

/**
 * @typedef ObjectProperties
 * @type {object}
 * @property {PropertyGroup[]} properties
 * @property {string[]} captions
 */

/**
 * @typedef PropertyGroup
 * @type {object}
 * @property {string} caption
 * @property {PropertyGroup[]} propertyGroups
 * @property {Property[]} properties
 */

/**
 * @typedef Properties
 * @type {PropertyGroup}
 */

/**
 * @typedef Problem
 * @type {object}
 * @property {string} property
 * @property {("error" | "warning" | "deprecation")} severity
 * @property {string} message
 * @property {string} studioMessage
 * @property {string} url
 * @property {string} studioUrl
 */

/**
 * @param {object} values
 * @param {Properties} defaultProperties
 * @param {("web"|"desktop")} target
 * @returns {Properties}
 */
// export function getProperties(values, defaultProperties, target) {
//     // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
//     /* Example
//     if (values.myProperty === "custom") {
//         delete defaultProperties.properties.myOtherProperty;
//     }
//     */
//     return defaultProperties;
// }

export function getProperties(values, defaultValues) {
    if (values.readMode === true) {
        hidePropertiesIn(defaultValues, values, ["optionSystem", "optionLight", "optionDark"]);
    }
    return defaultValues;
}

// /**
//  * @param {Object} values
//  * @returns {Problem[]} returns a list of problems.
//  */
// export function check(values) {
//    /** @type {Problem[]} */
//    const errors = [];
//    // Add errors to the above array to throw errors in Studio and Studio Pro.
//    /* Example
//    if (values.myProperty !== "custom") {
//        errors.push({
//            property: `myProperty`,
//            message: `The value of 'myProperty' is different of 'custom'.`,
//            url: "https://github.com/myrepo/mywidget"
//        });
//    }
//    */
//    return errors;
// }

// export function check(values) {
//     const errors = [];
//     if (values.readMode === true) {
//         errors.push({
//             property: "optionLight",
//             message: "optionLight"
//         });
//     }
//     if (values.readMode === false) {
//         errors.push({
//             property: "optionSystem",
//             message: "optionSystem"
//         });
//     }
//     return errors;
// }

// /**
//  * @param {object} values
//  * @param {boolean} isDarkMode
//  * @param {number[]} version
//  * @returns {object}
//  */
// export function getPreview(values, isDarkMode, version) {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     };
// }

export function getPreview(values, isDarkMode, version) {
    return {
        type: "Container",
        borders: true,
        backgroundColor: isDarkMode ? "#313131" : "#eaeaea",
        children: [
            {
                type: "Container",
                borders: true,
                padding: 10,
                children: [
                    {
                        type: "Text",
                        content: "Theme Switcher: " + (values.readMode === true ? "Read mode" : "Edit mode")
                    }
                ]
            }
        ]
    };
}

// /**
//  * @param {Object} values
//  * @param {("web"|"desktop")} platform
//  * @returns {string}
//  */
// export function getCustomCaption(values, platform) {
//     return "ThemeSwitcher";
// }
