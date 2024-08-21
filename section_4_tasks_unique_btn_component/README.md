Creating Flexible Components
Your task is to build a highly re-usable, custom Button component that can be used in all the following ways (also see the code in the App.js file):

"Filled" mode (default):

<Button>Default</Button>
or

<Button mode="filled">Filled</Button>
should yield buttons that looks like this:





"Outline" mode:

<Button mode="outline">Outline</Button>
should yield a button that looks like this:



"Text-only" mode:

<Button mode="text">Text</Button>
should yield a button that looks like this:



With Icon:

<Button Icon={HomeIcon}>Home</Button>
or

<Button Icon={PlusIcon} mode="text">
  Add
</Button>
should yield buttons that look like this:



Hint: To make sure the icon becomes visible (if passed correctly to the component & used in there), wrap the icon component in the button with a <span> that has the class "button-icon" on it.

Also wrap the children prop with a <span>!

You find all the styles (CSS classes) that are required to build a button that supports these different "modes" in the provided index.css file!

All buttons need a button CSS class - and then, depending on their mode, additional classes.

In addition, the custom Button component must accept all standard props that could be set on the built-in <button>. These props should be forwarded to the default <button> element that will be used in the custom Button component.

Your task therefore is to work on the Button component provided in the Button.js file. Don't add multiple custom components, instead work on that one provided component and make sure that it supports all these different modes & features. Also make sure, that if no mode is set, the "filled" mode is assumed as a default.

The complete, finished Button component code can be found at the end of this text.

In the solution, as a first step, a mode prop is extracted from the incoming props object in the Button component. This mode prop is then used to dynamically construct a string that contains all to-be-assigned CSS classes.

Since the task required a default "button mode" of "filled", the mode prop is assigned a default value of 'filled'. Therefore, Button can be used without the mode prop and still get that "filled look".

In addition, the special, built-in children prop is extracted to output the content passed between the <Button> tags:

export default function Button({ children, mode = 'filled'}) {
  let cssClasses = `button ${mode}-button`;
 
  return <button className={cssClasses}>{children}</button>;
}
As a next step, to support setting all the default <button> props, all remaining props are collected in a props object via JavaScript's "rest property" syntax.

These props are then spread onto the built-in <button> element:

export default function Button({ children, mode = 'filled', ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  return <button className={cssClasses} {...props}>{children}</button>;
}
Since those props could also include the className prop, that prop's value is merged into the cssClasses string:

export default function Button({ children, className, mode = 'filled', ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return <button className={cssClasses} {...props}>{children}</button>;
}
Of course, the custom Button should also support icons. Therefore, an Icon prop is extracted from the incoming props. It's called Icon (with an uppercase "I") and not icon (lowercase "i") because this prop should hold a component identifier (i.e., a pointer at a component function) as a value.

Keep in mind, that the custom Button is, for example, used like this:

<Button Icon={PlusIcon}>Add</Button>
The goal therefore is to use this Icon prop value as a component inside the Button component. In addition, if the Icon prop is set, the CSS classes are again extended to add the icon-button class:

export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
  let cssClasses = `button ${mode}-button`;
 
  if (Icon) {
    cssClasses += ' icon-button';
  }
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
In this, final, code snippet, the Icon is output as a separate component (<Icon />), wrapped in a <span>, if the Icon prop holds a value.