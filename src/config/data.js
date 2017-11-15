
export default  {

    basics: [
        {
            header: 'Component',
            content: [
                'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
                'Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.',
                'React is pretty flexible but it has a single strict rule: All React components must act like pure functions with respect to their props.'
            ]
        },
        {
            header: '_Container',
            content: [
                'Containers can be considered wrappers for Components.  It links reducers (states) and actions (methods) to the component.',
            ]
        },        {
            header: 'Component-reducer',
            content: [
                'Reducers will implement actions. It is called after every actions called.  It will receive a payload from action.'
            ]
        },
        {
            header: 'Component-actions',
            content: [
                'Actions provides method prototypes that will be implemented in reducers.  It provides the name of the method and return an action type and payload to the reducer associated with it.'
            ]
        }
    
    ]


}