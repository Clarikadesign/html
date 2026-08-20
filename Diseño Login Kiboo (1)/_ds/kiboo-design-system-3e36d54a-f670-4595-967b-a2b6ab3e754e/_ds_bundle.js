/* @ds-bundle: {"format":4,"namespace":"KibooDesignSystem_3e36d5","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StatCard","sourcePath":"components/display/StatCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"8588cd6c6d2a","components/display/Badge.jsx":"a96d0da32e77","components/display/Card.jsx":"4586a451aeb9","components/display/StatCard.jsx":"dbb9c43f59aa","components/display/Tag.jsx":"322ef3e1e150","components/feedback/Alert.jsx":"2fa90170befc","components/forms/Button.jsx":"47968fc663f4","components/forms/Checkbox.jsx":"a37ef3b125b5","components/forms/IconButton.jsx":"b8ffdda32074","components/forms/Input.jsx":"d8ddda1217b2","components/forms/Select.jsx":"493e7df409d1","components/forms/Switch.jsx":"98457037c28e","components/media/Icon.jsx":"2376508437df","ui_kits/kiboo-panel/AppShell.jsx":"1af7a2cd6b85","ui_kits/kiboo-panel/DashboardScreen.jsx":"ee3344fa9379","ui_kits/kiboo-panel/ProductDetailScreen.jsx":"6d29538a2a19","ui_kits/kiboo-panel/ProductsScreen.jsx":"f216ba798a9e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KibooDesignSystem_3e36d5 = window.KibooDesignSystem_3e36d5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — image or initials on a soft brand tint. */
function Avatar({
  src,
  name = '',
  size = 40,
  tone = 'violet',
  style = {},
  ...rest
}) {
  const tones = {
    violet: {
      bg: 'var(--violet-100)',
      fg: 'var(--violet-700)'
    },
    green: {
      bg: 'var(--green-100)',
      fg: 'var(--green-700)'
    },
    blue: {
      bg: 'var(--blue-100)',
      fg: 'var(--blue-700)'
    }
  }[tone];
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: tones.bg,
      color: tones.fg,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.38,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Status badge / pill. Soft-tint background + strong-tint text, with dot. */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  icon,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    green: {
      fg: 'var(--green-700)',
      bg: 'var(--green-50)',
      solid: 'var(--green-500)',
      solidFg: 'var(--navy-950)'
    },
    blue: {
      fg: 'var(--blue-700)',
      bg: 'var(--blue-50)',
      solid: 'var(--blue-500)',
      solidFg: '#fff'
    },
    violet: {
      fg: 'var(--violet-700)',
      bg: 'var(--violet-50)',
      solid: 'var(--violet-500)',
      solidFg: '#fff'
    },
    amber: {
      fg: 'var(--warning)',
      bg: 'var(--warning-bg)',
      solid: 'var(--amber-500)',
      solidFg: 'var(--navy-950)'
    },
    red: {
      fg: 'var(--red-700)',
      bg: 'var(--red-100)',
      solid: 'var(--red-500)',
      solidFg: '#fff'
    },
    neutral: {
      fg: 'var(--slate-700)',
      bg: 'var(--slate-100)',
      solid: 'var(--slate-600)',
      solidFg: '#fff'
    }
  }[tone];
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? tones.solid : tones.bg,
      color: solid ? tones.solidFg : tones.fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: solid ? tones.solidFg : tones.solid
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kiboo surface card — white, generously rounded, soft diffuse shadow.
 * The fundamental container of the brand.
 */
function Card({
  elevation = 'md',
  padding = 'lg',
  interactive = false,
  as = 'div',
  children,
  style = {},
  ...rest
}) {
  const El = as;
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)'
  };
  const shadows = {
    flat: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: e => {
      if (interactive) setHover(true);
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: e => {
      if (interactive) setHover(false);
      rest.onMouseLeave && rest.onMouseLeave(e);
    },
    style: {
      background: 'var(--surface-card)',
      border: elevation === 'flat' ? '1px solid var(--border-subtle)' : '1px solid rgba(45,58,74,0.04)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : shadows[elevation],
      padding: pads[padding],
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — Kiboo's signature metric block: label, a big bold GREEN
 * number, a unit, and an optional trend/status line. Straight from the
 * stock-sync product UI.
 */
function StatCard({
  label,
  value,
  unit,
  icon,
  tone = 'green',
  trend,
  style = {},
  ...rest
}) {
  const toneColor = {
    green: 'var(--green-600)',
    blue: 'var(--blue-600)',
    violet: 'var(--violet-600)',
    navy: 'var(--navy-900)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid rgba(45,58,74,0.04)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-muted)'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--violet-500)',
      display: 'inline-flex'
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extra)',
      fontSize: 'var(--text-2xl)',
      color: toneColor,
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, unit)), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, trend));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Removable/selectable tag chip (categories, filters). */
function Tag({
  selected = false,
  onRemove,
  icon,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--violet-500)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: selected ? '1.5px solid var(--violet-500)' : '1.5px solid var(--border-default)',
      cursor: rest.onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Quitar",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7,
      display: 'inline-flex',
      padding: 0,
      fontSize: '14px',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline alert / banner with soft tint and status accent. */
function Alert({
  tone = 'info',
  title,
  icon,
  onClose,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    success: {
      bg: 'var(--success-bg)',
      fg: 'var(--success)',
      border: 'var(--green-200)'
    },
    info: {
      bg: 'var(--info-bg)',
      fg: 'var(--info)',
      border: 'var(--blue-200)'
    },
    warning: {
      bg: 'var(--warning-bg)',
      fg: 'var(--warning)',
      border: 'var(--amber-500)'
    },
    danger: {
      bg: 'var(--danger-bg)',
      fg: 'var(--danger)',
      border: 'var(--red-500)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: tones.bg,
      border: `1px solid ${tones.border}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4) var(--space-5)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: tones.fg,
      display: 'inline-flex',
      marginTop: 1,
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-base)',
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-subtle)',
      fontSize: '18px',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kiboo Button — friendly, pill-rounded, soft-shadowed.
 * Variants: primary (green), secondary (violet), tertiary (blue),
 * outline, ghost. Sizes: sm | md | lg.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--text-base)',
      gap: '8px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: 'var(--text-md)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--green-500)',
      color: 'var(--navy-950)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--violet-500)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    tertiary: {
      background: 'var(--blue-500)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1.5px solid var(--border-default)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--violet-600)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-fast) var(--ease-out)',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.96)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with brand-green check, used heavily in Kiboo checklists. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const cbId = id || React.useId();
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: on ? '1.5px solid var(--green-500)' : '1.5px solid var(--border-default)',
      background: on ? 'var(--green-500)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--navy-950)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular / square icon-only button. */
function IconButton({
  variant = 'soft',
  size = 'md',
  label,
  children,
  style = {},
  disabled = false,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const variants = {
    soft: {
      background: 'var(--violet-50)',
      color: 'var(--violet-600)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--violet-500)',
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: '#fff',
      color: 'var(--text-heading)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'filter var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.95)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label, optional icon, hint & error states. */
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  disabled = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--violet-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: disabled ? 'var(--surface-sunken)' : '#fff',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      padding: '11px 0',
      minWidth: 0,
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match Kiboo inputs. */
function Select({
  label,
  hint,
  error,
  id,
  disabled = false,
  children,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--violet-400)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-sunken)' : '#fff',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 40px 12px 14px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--ring)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      fontSize: '12px'
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle switch. On = brand green. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const swId = id || React.useId();
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const control = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--green-500)' : 'var(--slate-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), control, label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kiboo Icon — thin-outline glyph from Lucide (the closest match to
 * Kiboo's hairline outline icon style). Requires the Lucide UMD script
 * to be present on the page (loaded via CDN in cards / kits).
 */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide && window.lucide.createIcons) {
      el.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      el.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kiboo-panel/AppShell.jsx
try { (() => {
// Kiboo panel — app shell (sidebar + topbar). Uses window.KibooDesignSystem components.
const {
  Icon,
  Avatar,
  IconButton,
  Badge
} = window.KibooDesignSystem_3e36d5;
const NAV = [{
  id: 'inicio',
  label: 'Inicio',
  icon: 'layout-dashboard'
}, {
  id: 'productos',
  label: 'Productos',
  icon: 'package'
}, {
  id: 'pedidos',
  label: 'Pedidos',
  icon: 'shopping-bag',
  badge: '3'
}, {
  id: 'stock',
  label: 'Stock',
  icon: 'warehouse'
}, {
  id: 'ventas',
  label: 'Ventas',
  icon: 'bar-chart-3'
}, {
  id: 'integraciones',
  label: 'Integraciones',
  icon: 'plug'
}];
function AppShell({
  current,
  onNavigate,
  title,
  subtitle,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-app)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flexShrink: 0,
      background: '#fff',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 8px 20px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/kiboo-logo.png",
    alt: "Kiboo",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      flex: 1
    }
  }, NAV.map(item => {
    const active = current === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onNavigate(item.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        background: active ? 'var(--violet-50)' : 'transparent',
        color: active ? 'var(--violet-700)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-semibold)',
        transition: 'background var(--dur-fast) var(--ease-out)',
        textAlign: 'left'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'var(--slate-100)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 19,
      color: active ? 'var(--violet-600)' : 'var(--slate-500)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.badge && /*#__PURE__*/React.createElement(Badge, {
      tone: "violet",
      variant: "solid",
      style: {
        padding: '2px 7px'
      }
    }, item.badge));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('configuracion'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 19,
    color: "var(--slate-500)"
  }), /*#__PURE__*/React.createElement("span", null, "Configuraci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 28px',
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), actions, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notificaciones",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 19
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Mabel Recife",
    size: 36
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '26px 28px'
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kiboo-panel/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kiboo-panel/DashboardScreen.jsx
try { (() => {
// Kiboo panel — Dashboard (Inicio) screen.
const {
  Card,
  StatCard,
  Badge,
  Icon,
  Button
} = window.KibooDesignSystem_3e36d5;
function DashboardScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 22px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--bg-mesh)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh-cw",
    size: 22,
    color: "var(--violet-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Tiendanube sincronizada"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Stock, precios y pedidos al d\xEDa \xB7 \xFAltima sincronizaci\xF3n hace instantes")), /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "En l\xEDnea")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Ventas hoy",
    value: "$184.200",
    tone: "green",
    trend: "+12% vs ayer",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Pedidos nuevos",
    value: 7,
    tone: "violet",
    trend: "3 sin preparar",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-bag",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Productos activos",
    value: 342,
    tone: "blue",
    trend: "18 con bajo stock",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "package",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Tasa de conversi\xF3n",
    value: "3,4%",
    tone: "navy",
    trend: "+0,3 pts",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "target",
      size: 18
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)'
    }
  }, "\xDAltimos pedidos"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNavigate('pedidos')
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['#10428', 'Mabel R.', '$32.400', 'green', 'Pagado'], ['#10427', 'Julián P.', '$18.900', 'amber', 'Preparando'], ['#10426', 'Carla M.', '$54.100', 'green', 'Pagado'], ['#10425', 'Diego S.', '$9.750', 'violet', 'Enviado']].map(([id, name, amount, tone, status], i) => /*#__PURE__*/React.createElement("div", {
    key: id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '13px 4px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      width: 62
    }
  }, id), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      width: 80,
      textAlign: 'right'
    }
  }, amount))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontSize: 'var(--text-md)'
    }
  }, "Canales de venta"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['Tiendanube', 'store', 'var(--violet-500)', 62], ['Mercado Libre', 'shopping-cart', 'var(--amber-500)', 24], ['Local Centro', 'building-2', 'var(--blue-500)', 14]].map(([label, icon, color, pct]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: color
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--slate-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: color
    }
  }))))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kiboo-panel/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kiboo-panel/ProductDetailScreen.jsx
try { (() => {
// Kiboo panel — Product detail with multi-location stock (the signature sync view).
const {
  Card,
  Badge,
  Icon,
  Button,
  StatCard
} = window.KibooDesignSystem_3e36d5;
const LOCATIONS = [['Local Centro', 'store', 8], ['Local Norte', 'store', 6], ['Depósito Central', 'warehouse', 7], ['Depósito E-commerce', 'warehouse', 4]];
function ProductDetailScreen({
  product,
  onBack
}) {
  const p = product || ['Zapatilla Basquet', '0091098.1', 'Calzado', 25, 'ok'];
  const total = LOCATIONS.reduce((s, l) => s + l[2], 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      padding: 0,
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Volver a productos"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: 'var(--radius-md)',
      background: 'var(--slate-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package",
    size: 44,
    color: "var(--slate-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 4px',
      fontSize: 'var(--text-xl)'
    }
  }, p[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, "SKU ", p[1], " \xB7 ", p[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "Stock total disponible"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-3xl)',
      color: 'var(--green-600)',
      lineHeight: 1.05
    }
  }, total, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "unidades"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 14,
      color: "var(--green-700)"
    })
  }, "Stock actualizado"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, "Sincronizado hace instantes"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 15,
      color: "#fff"
    })
  }, "Sincronizar ahora")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontSize: 'var(--text-md)'
    }
  }, "Stock por ubicaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, LOCATIONS.map(([name, icon, qty]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    padding: "md",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--violet-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: "var(--violet-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-sm)',
      marginBottom: 4
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Stock disponible"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-2xl)',
      color: 'var(--green-600)',
      lineHeight: 1.1
    }
  }, qty), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "unidades"))))));
}
window.ProductDetailScreen = ProductDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kiboo-panel/ProductDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kiboo-panel/ProductsScreen.jsx
try { (() => {
// Kiboo panel — Products (stock list) screen.
const {
  Card,
  Badge,
  Icon,
  Button,
  Input,
  Tag
} = window.KibooDesignSystem_3e36d5;
const PRODUCTS = [['Zapatilla Basquet', '0091098.1', 'Calzado', 25, 'ok'], ['Sillón Nórdico Roble', '0044210.3', 'Living', 4, 'low'], ['Mesa Ratona Mabel', '0044118.0', 'Living', 12, 'ok'], ['Lámpara de Pie Lino', '0071902.2', 'Iluminación', 0, 'out'], ['Almohadón Textil', '0033551.7', 'Deco', 48, 'ok'], ['Vajilla Gres x6', '0088420.1', 'Cocina', 9, 'ok']];
function StockPill({
  qty,
  state
}) {
  const map = {
    ok: {
      tone: 'green',
      label: 'En stock'
    },
    low: {
      tone: 'amber',
      label: 'Bajo stock'
    },
    out: {
      tone: 'red',
      label: 'Sin stock'
    }
  }[state];
  return /*#__PURE__*/React.createElement(Badge, {
    tone: map.tone,
    dot: true
  }, map.label);
}
function ProductsScreen({
  onOpen
}) {
  const [filter, setFilter] = React.useState('Todos');
  const cats = ['Todos', 'Living', 'Calzado', 'Deco', 'Cocina'];
  const rows = PRODUCTS.filter(p => filter === 'Todos' || p[2] === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por nombre o SKU",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    })
  }, "Importar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    })
  }, "Nuevo producto")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement(Card, {
    padding: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.4fr 1.2fr 1fr 1fr 0.6fr',
      padding: '14px 22px',
      borderBottom: '1px solid var(--border-subtle)',
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Producto"), /*#__PURE__*/React.createElement("span", null, "SKU"), /*#__PURE__*/React.createElement("span", null, "Stock"), /*#__PURE__*/React.createElement("span", null, "Estado"), /*#__PURE__*/React.createElement("span", null)), rows.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p[1],
    onClick: () => onOpen(p),
    style: {
      display: 'grid',
      gridTemplateColumns: '2.4fr 1.2fr 1fr 1fr 0.6fr',
      alignItems: 'center',
      padding: '14px 22px',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--slate-50)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--slate-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package",
    size: 18,
    color: "var(--slate-400)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, p[0])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, p[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-lg)',
      color: p[4] === 'out' ? 'var(--red-500)' : 'var(--green-600)'
    }
  }, p[3]), /*#__PURE__*/React.createElement(StockPill, {
    qty: p[3],
    state: p[4]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--slate-400)"
  }))))));
}
window.ProductsScreen = ProductsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kiboo-panel/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

})();
