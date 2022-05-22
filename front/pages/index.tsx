import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";
import { Card } from "components/card";

const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

const Hits = (props) => {
    return props.hits.map((elements, index) => {
        // TODO ajouter une clé random ..
        return <Card key={index} {...elements} />;
    });
};

export default function Home() {
    const CustomHits = connectHits(Hits);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Rechercher un produit</h1>
                <InstantSearch indexName="bestbuy" searchClient={searchClient}>
                    <SearchBox />
                    <div className={styles.hits_container}>
                        <CustomHits />
                    </div>
                </InstantSearch>
            </main>
        </div>
    );
}
