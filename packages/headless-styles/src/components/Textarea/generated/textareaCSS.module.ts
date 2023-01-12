// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import inputCSS from '../../Input/generated/inputCSS.module'

export default {
  textareaBase: {
    ...inputCSS.defaultInput,
    height: '5rem',
    lineHeight: 'inherit',
    minHeight: '5rem',
    minWidth: '0',
    paddingBottom: '8px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    paddingTop: '8px',
    position: 'relative',
    transitionProperty: 'border, box-shadow, outline',
    verticalAlign: 'top',
    '&:active': {
      ...('&:active' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:active'] === 'object'
        ? inputCSS.defaultInput['&:active']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      ...('&:hover' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:hover'] === 'object'
        ? inputCSS.defaultInput['&:hover']
        : undefined),
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      ...('&:focus' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus'] === 'object'
        ? inputCSS.defaultInput['&:focus']
        : undefined),
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      ...('&:focus:not(:focus-visible)' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus:not(:focus-visible)'] === 'object'
        ? inputCSS.defaultInput['&:focus:not(:focus-visible)']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    "&[data-disabled='true']": {
      ...("&[data-disabled='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-disabled='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-disabled='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    "&[data-invalid='true']": {
      ...("&[data-invalid='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-invalid='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-invalid='true']"]
        : undefined),
      borderColor: 'var(--ps-danger-border)',
      boxShadow: 'var(--ps-danger-border) 0 0 0 2px',
    },
    "&[data-readonly='true']": {
      ...("&[data-readonly='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-readonly='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-readonly='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
  },
  initialTextarea: {
    ...inputCSS.defaultInput,
    height: '5rem',
    lineHeight: 'inherit',
    minHeight: '5rem',
    minWidth: '0',
    paddingBottom: '8px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    paddingTop: '8px',
    position: 'relative',
    transitionProperty: 'border, box-shadow, outline',
    verticalAlign: 'top',
    '&:active': {
      ...('&:active' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:active'] === 'object'
        ? inputCSS.defaultInput['&:active']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      ...('&:hover' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:hover'] === 'object'
        ? inputCSS.defaultInput['&:hover']
        : undefined),
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      ...('&:focus' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus'] === 'object'
        ? inputCSS.defaultInput['&:focus']
        : undefined),
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      ...('&:focus:not(:focus-visible)' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus:not(:focus-visible)'] === 'object'
        ? inputCSS.defaultInput['&:focus:not(:focus-visible)']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    "&[data-disabled='true']": {
      ...("&[data-disabled='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-disabled='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-disabled='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    "&[data-invalid='true']": {
      ...("&[data-invalid='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-invalid='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-invalid='true']"]
        : undefined),
      borderColor: 'var(--ps-danger-border)',
      boxShadow: 'var(--ps-danger-border) 0 0 0 2px',
    },
    "&[data-readonly='true']": {
      ...("&[data-readonly='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-readonly='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-readonly='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
  },
  noneTextarea: {
    ...inputCSS.defaultInput,
    height: '5rem',
    lineHeight: 'inherit',
    minHeight: '5rem',
    minWidth: '0',
    paddingBottom: '8px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    paddingTop: '8px',
    position: 'relative',
    transitionProperty: 'border, box-shadow, outline',
    verticalAlign: 'top',
    '&:active': {
      ...('&:active' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:active'] === 'object'
        ? inputCSS.defaultInput['&:active']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      ...('&:hover' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:hover'] === 'object'
        ? inputCSS.defaultInput['&:hover']
        : undefined),
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      ...('&:focus' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus'] === 'object'
        ? inputCSS.defaultInput['&:focus']
        : undefined),
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      ...('&:focus:not(:focus-visible)' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus:not(:focus-visible)'] === 'object'
        ? inputCSS.defaultInput['&:focus:not(:focus-visible)']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    "&[data-disabled='true']": {
      ...("&[data-disabled='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-disabled='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-disabled='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    "&[data-invalid='true']": {
      ...("&[data-invalid='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-invalid='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-invalid='true']"]
        : undefined),
      borderColor: 'var(--ps-danger-border)',
      boxShadow: 'var(--ps-danger-border) 0 0 0 2px',
    },
    "&[data-readonly='true']": {
      ...("&[data-readonly='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-readonly='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-readonly='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    resize: 'none',
  },
  horizontalTextarea: {
    ...inputCSS.defaultInput,
    height: '5rem',
    lineHeight: 'inherit',
    minHeight: '5rem',
    minWidth: '0',
    paddingBottom: '8px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    paddingTop: '8px',
    position: 'relative',
    transitionProperty: 'border, box-shadow, outline',
    verticalAlign: 'top',
    '&:active': {
      ...('&:active' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:active'] === 'object'
        ? inputCSS.defaultInput['&:active']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      ...('&:hover' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:hover'] === 'object'
        ? inputCSS.defaultInput['&:hover']
        : undefined),
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      ...('&:focus' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus'] === 'object'
        ? inputCSS.defaultInput['&:focus']
        : undefined),
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      ...('&:focus:not(:focus-visible)' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus:not(:focus-visible)'] === 'object'
        ? inputCSS.defaultInput['&:focus:not(:focus-visible)']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    "&[data-disabled='true']": {
      ...("&[data-disabled='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-disabled='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-disabled='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    "&[data-invalid='true']": {
      ...("&[data-invalid='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-invalid='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-invalid='true']"]
        : undefined),
      borderColor: 'var(--ps-danger-border)',
      boxShadow: 'var(--ps-danger-border) 0 0 0 2px',
    },
    "&[data-readonly='true']": {
      ...("&[data-readonly='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-readonly='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-readonly='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    resize: 'horizontal',
  },
  verticalTextarea: {
    ...inputCSS.defaultInput,
    height: '5rem',
    lineHeight: 'inherit',
    minHeight: '5rem',
    minWidth: '0',
    paddingBottom: '8px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
    paddingTop: '8px',
    position: 'relative',
    transitionProperty: 'border, box-shadow, outline',
    verticalAlign: 'top',
    '&:active': {
      ...('&:active' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:active'] === 'object'
        ? inputCSS.defaultInput['&:active']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    '&:hover': {
      ...('&:hover' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:hover'] === 'object'
        ? inputCSS.defaultInput['&:hover']
        : undefined),
      boxShadow: 'var(--ps-border-strong) 0 0 0 1px',
    },
    '&:focus': {
      ...('&:focus' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus'] === 'object'
        ? inputCSS.defaultInput['&:focus']
        : undefined),
      boxShadow: 'none',
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      ...('&:focus:not(:focus-visible)' in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput['&:focus:not(:focus-visible)'] === 'object'
        ? inputCSS.defaultInput['&:focus:not(:focus-visible)']
        : undefined),
      boxShadow: 'none',
      outline: 'none',
    },
    "&[data-disabled='true']": {
      ...("&[data-disabled='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-disabled='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-disabled='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    "&[data-invalid='true']": {
      ...("&[data-invalid='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-invalid='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-invalid='true']"]
        : undefined),
      borderColor: 'var(--ps-danger-border)',
      boxShadow: 'var(--ps-danger-border) 0 0 0 2px',
    },
    "&[data-readonly='true']": {
      ...("&[data-readonly='true']" in inputCSS.defaultInput &&
      typeof inputCSS.defaultInput["&[data-readonly='true']"] === 'object'
        ? inputCSS.defaultInput["&[data-readonly='true']"]
        : undefined),
      cursor: 'not-allowed',
    },
    resize: 'vertical',
  },
  textareaBase_data_disabled__true: {
    '&:hover': {
      boxShadow: 'none',
    },
  },
  textareaBase_data_readonly__true: {
    '&:hover': {
      boxShadow: 'none',
    },
  },
}
