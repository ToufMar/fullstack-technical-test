import styles from "../styles/Home.module.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { Card } from "components/card";

const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

const Hit = ({ hit }) => {
    return <Card {...hit} />;
};

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Rechercher un produit</h1>
                <InstantSearch indexName="bestbuy" searchClient={searchClient}>
                    <SearchBox />
                    <Hits hitComponent={Hit} />
                </InstantSearch>
            </main>
        </div>
    );
}
