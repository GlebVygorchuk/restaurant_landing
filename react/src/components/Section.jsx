export default function Section({classname, isVisible, children}) {
    <section classname={classname + (isVisible ? 'visible' : '')}>
        {children}
    </section>
}