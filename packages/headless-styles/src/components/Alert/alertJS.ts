import { createJSA11yProps, createJSProps } from '../../utils/helpers'
import {
  createDialogIconProps,
  createPandoOptions,
} from '../shared/defaultOptions'
import type { DialogOptions } from '../../components/types'
import type { ButtonOptions, InputOptions } from '../../types'
import type { ConfirmDialogKind } from '../ConfirmDialog/types'
import { getAlertA11yProps } from './shared'
import styles from './generated/alertCSS.module'
import animationStyles from '../shared/generated/keyframes.module'

export function getAlertBackdropJSProps(options: DialogOptions) {
  const a11yProps = getAlertA11yProps(options)

  return {
    backdrop: {
      ...createJSProps(styles.alertDialogBackdrop),
    },
    focusGuard: {
      ...createJSA11yProps(a11yProps.focusGuard),
      ...createJSProps(styles.alertFocusGuard),
    },
    wrapper: {
      ...createJSA11yProps(a11yProps.wrapper),
      ...createJSProps(styles.alertDialogWrapper),
    },
  }
}

export function getAlertJSProps() {
  return {
    ...createJSA11yProps(getAlertA11yProps({} as DialogOptions).section),
    ...createJSProps(styles.alertDialogSection),
    keyframes: animationStyles.keyframesFadeInAnimation,
  }
}

export function getAlertHeaderJSProps(kind: ConfirmDialogKind) {
  const iconProps = createDialogIconProps(
    { kind },
    {
      iconWrapper: {
        ...createJSProps(styles.alertDialogTitleIcon),
      },
    }
  )

  return {
    ...iconProps,
    header: {
      ...createJSProps(styles.alertDialogHeader),
    },
  }
}

export function getAlertHeadingJSProps(id: string) {
  return {
    ...createJSA11yProps(
      getAlertA11yProps({ headingId: id } as DialogOptions).heading
    ),
  }
}

export function getAlertBodyJSProps(id: string) {
  return {
    ...createJSA11yProps(
      getAlertA11yProps({ bodyId: id } as DialogOptions).body
    ),
  }
}

export function getAlertLabelJSProps(htmlFor: string) {
  return {
    ...createJSA11yProps({ htmlFor }),
    ...createJSProps(styles.alertDialogLabel),
  }
}

export function getAlertInputJSProps(options: InputOptions) {
  return {
    inputOptions: createPandoOptions<InputOptions>({
      ...options,
      size: 'l',
      type: 'text',
    }),
    inputWrapper: {
      ...createJSProps(styles.alertDialogInputWrapper),
    },
  }
}

export function getAlertFooterJSProps() {
  return {
    ...createJSProps(styles.alertDialogFooter),
  }
}

export function getAlertCancelButtonJSOptions() {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      usage: 'outline',
    }),
  }
}

export function getAlertConfirmButtonJSOptions(kind: ConfirmDialogKind) {
  return {
    btnOptions: createPandoOptions<ButtonOptions>({
      sentiment: kind === 'destructive' ? 'danger' : 'action',
    }),
  }
}
