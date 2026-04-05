import React from "react";
//import Font-Awesome form "Font-Awesome";
import bhaktiImage from "./images/bhakti.jpg";
import carnaticImage from "./images/carnatic.jpg";
import filmmusicImage from "./images/filmmusic.jpg";
import folkImage from "./images/folk.jpg";
import hindustaniimage from "./images/hindustani.jpg";
import qawwaliimage from "./images/qawwali.jpg";

const Music = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">
                                Types of Music in India
                            </h3>
                            <h1 className="display-6 text-center mb-4">
                                <b>The sound of India </b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-15">
                            <div className="card p-5">
                                <div className="card-body text-center" style={{ display: 'inline-block' }}>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                    Hindustani classical music
                                    </h5>
                                    <img src={hindustaniimage}  ALIGN="left" alt="hindustaniimage" sstyle={{ width: '400px', height: '250px' }} />

                                    <p className="card-text lead">
                                    Hindustani classical music, a rich and deeply spiritual tradition, is one of the two major classical music systems of India, the other being Carnatic music. With roots in the ancient Vedic scriptures, this musical genre has evolved over centuries, characterized by its emotive and improvisational nature. It encompasses a vast and intricate system of ragas (melodic scales) and talas (rhythmic patterns), with performances often involving vocalists and instrumentalists.

Hindustani classical music is deeply intertwined with the cultural and spiritual fabric of India and has been influenced by various traditions and regional styles. Prominent instruments such as the sitar, tabla, and the flute are commonly used in performances. The music revolves around the concept of "raga," each of which carries a unique mood and structure, and "tala," rhythmic cycles that are the backbone of compositions.

The performances are marked by intricate improvisations, where the artist explores and elaborates on a raga to evoke different emotions and connect with the audience on a deeply spiritual level. This music transcends linguistic and regional boundaries, offering a profound and contemplative experience that has inspired generations of artists, listeners, and enthusiasts both within and outside India. Hindustani classical music is not just a form of artistic expression but a profound cultural and spiritual legacy, reflecting the depth and diversity of India's heritage.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-15">
                                <div className="card p-5">
                                    <div className="card-body text-center" style={{ display: 'inline-block' }}>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Carnatic music
                                        </h5>
                                        <img src={carnaticImage}  ALIGN="left" alt="carnaticImage" style={{ width: '400px', height: '250px' }} />

                                        <p className="card-text lead">
                                        Carnatic classical music, one of the two major classical music systems in India, is a deeply revered and intricate musical tradition that originates from the southern region of the Indian subcontinent. Rooted in the Vedas, ancient Sanskrit texts, and the Natya Shastra, it has evolved over centuries into a complex and highly structured art form that is characterized by its emphasis on melody, rhythm, and lyrical expression.

Carnatic music typically involves vocal performances, often accompanied by instruments such as the violin, mridangam (a percussion instrument), flute, and veena. The music revolves around the concept of "raga" and "tala," with thousands of unique ragas and talas forming the basis of compositions. The artist explores the raga's melodic structure, improvising on it to convey different emotions and intricate rhythmic patterns in the tala.

Carnatic music has a profound spiritual and cultural significance, with its lyrics often invoking themes of devotion and spirituality, making it a deeply immersive and contemplative experience. The music transcends linguistic and regional boundaries and has a dedicated following not only in South India but also among enthusiasts worldwide. Carnatic classical music is a testament to India's diverse cultural heritage and the deep spirituality that is interwoven into its artistic traditions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-15">
                                <div className="card p-5">
                                    <div className="card-body text-center" style={{ display: 'inline-block' }}>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Folk music
                                        </h5>
                                        <img src={folkImage}  ALIGN="left" alt="folkImage" sstyle={{ width: '400px', height: '250px' }} />

                                        <p className="card-text lead">
                                        Folk music, a diverse and dynamic genre, serves as a reflection of the cultural identity and traditions of various communities and regions around the world. Rooted in the daily lives, experiences, and values of ordinary people, folk music encompasses a wide range of musical styles, from traditional ballads and work songs to dance tunes and storytelling. It often features simple melodies and lyrics passed down through generations, with a strong emphasis on oral transmission.

Folk music is deeply ingrained in the social fabric of different cultures, often associated with rituals, celebrations, and local events. It frequently employs traditional instruments and reflects the customs and heritage of a particular group or community. Whether it's the Appalachian folk music of the United States, the Celtic folk tunes of Ireland, the flamenco of Spain, or the folk songs of rural India, these musical expressions serve as a powerful link to the past and provide a sense of identity and belonging for communities.

Folk music's enduring popularity lies in its authenticity and the human stories it tells. It has the ability to connect people across borders and generations, making it a treasured and vital part of the world's cultural heritage. Folk music continues to evolve, adapting to contemporary influences while preserving the authenticity and traditions that define it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-15">
                            <div className="card p-5">
                                <div className="card-body text-center" style={{ display: 'inline-block' }}>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">
                                    Film music 
                                    </h5>
                                    <img src={filmmusicImage}  ALIGN="left" alt="filmmusicImage" style={{ width: '250px', height: '400px' }} />

                                    <p className="card-text lead">
                                    Film music, often referred to as film score or soundtrack, is an integral and emotive component of the cinematic experience. It is the art of composing and arranging music to enhance the storytelling, emotions, and atmosphere of a film. Film music plays a crucial role in shaping the viewer's perception and engagement with the on-screen narrative. From the dramatic orchestral compositions of classical Hollywood films to the fusion of different musical genres in modern cinema, film music has evolved over the years, offering an incredible diversity of styles and approaches. Renowned composers like John Williams, Hans Zimmer, and Ennio Morricone have left an indelible mark on the industry, creating iconic musical themes that are instantly recognizable. Film music can evoke a wide range of emotions, from suspense and tension to joy and nostalgia, making it an essential element in the art of filmmaking. It serves as a powerful tool for directors and filmmakers, helping to underscore the mood and message of a film, making the viewer's cinematic experience all the more immersive and unforgettable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-15">
                                <div className="card p-5">
                                    <div className="card-body text-center" style={{ display: 'inline-block' }}>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Bhakti music
                                        </h5>
                                        <img src={bhaktiImage}  ALIGN="left" alt="bhaktiImage" sstyle={{ width: '400px', height: '250px' }} />

                                        <p className="card-text lead">
                                        Bhakti music is a devotional and spiritually infused musical genre deeply rooted in the Bhakti movement, a religious and philosophical movement that originated in India during the medieval period. The word "Bhakti" translates to devotion or love, and Bhakti music revolves around expressing one's profound love and devotion to a higher power, often a deity or the divine. It is a means of connecting with the spiritual through song and music, transcending religious boundaries and focusing on the universality of devotion.

Bhakti music is characterized by soul-stirring lyrics and melodies, often sung in vernacular languages to make the spiritual teachings and emotions accessible to the masses. It is not confined to any one religion and is widely practiced in Hinduism, Sufi Islam, and other faiths. Bhakti music has given birth to various forms of devotional music, including bhajans (Hindu devotional songs), kirtans (call-and-response chants), and qawwali (Sufi devotional music).

Notable Bhakti saints and poets like Kabir, Meera, and Tulsidas have profoundly influenced the Bhakti music tradition with their lyrical and devotional compositions. Bhakti music serves as a means of spiritual expression and connection for individuals, providing a sense of solace, devotion, and unity with the divine. It continues to resonate with a diverse audience and serves as a powerful medium for exploring and experiencing one's relationship with the divine.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-15">
                                <div className="card p-5">
                                    <div className="card-body text-center" style={{ display: 'inline-block' }}>
                                        <h5 className="card-title mb-3 fs-4 fw-bold">
                                        Qawwali
                                        </h5>
                                        <img src={qawwaliimage}  ALIGN="left" alt="qawwaliimage" sstyle={{ width: '400px', height: '250px' }} />

                                        <p className="card-text lead">
                                        Qawwali is a vibrant and deeply spiritual form of devotional music with roots in the Sufi tradition of Islam. This musical genre originated in the South Asian subcontinent and has since spread to various parts of the world. At its heart, Qawwali is a means of expressing the intense love and devotion Sufi mystics have for the divine. It typically features a lead vocalist, known as the qawwal, who sings poetic verses, often written by famous Sufi poets, with a group of accompanying musicians and harmonious vocalists.

Qawwali performances are characterized by their fervent and emotive singing style, with the aim of connecting the listeners to a higher spiritual plane. The rhythmic handclaps, known as "clapping," and repetitive refrains add a hypnotic quality to the music, creating a trance-like atmosphere for both the performers and the audience. Qawwali has played a pivotal role in spreading Sufi teachings and has garnered a global following for its enchanting melodies and profound lyrics. The ability to convey a message of love, unity, and transcendence through music makes Qawwali a cherished art form and a significant aspect of the cultural and spiritual landscape in the regions where it thrives.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Music;