import React from 'react'

export const Mangas = (props) => {
    const { mangas, loading, filter } = props;

    if (loading) {
        return <h2>Loading...</h2>;
    }
    filter();

    return (
        <div className="center grid-column-10">
            {mangas.map((manga, id) => {
                return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid

                    <a
                        href={manga.url}
                        id={id}
                        className="card-product grid-column-8-2"
                    >
                        <div className="card-product-notice">
                            <span className="card-product-notice-time">7 phút trước</span>
                            <span className="card-product-notice-state">Hot</span>
                        </div>
                        <img
                            src={manga.image_url}
                            alt="No result"
                            className="image-top"
                        />
                        <h4 className="card-product-title">{manga.title}</h4>
                    </a>
                );
            })}
        </div>
    )
}
