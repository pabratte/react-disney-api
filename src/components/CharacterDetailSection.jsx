export default function CharacterDetailSection({ sectionName, sectionIcon, items }) {
    return (
        <section>
            <h4>{sectionIcon} {sectionName}</h4>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </section>
    )
}