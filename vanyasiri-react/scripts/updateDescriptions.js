const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '../src/data/products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

const descriptions = {
    'agar-wood-oil': `
        <h3>Agarwood in Vedic Texts: Sacred References</h3>
        <p>Agarwood (known as "Aguru" in Sanskrit) holds a revered place in ancient Hindu, Buddhist, and Ayurvedic traditions. Here are some key references in Vedic and classical texts:</p>
        <ol>
        <li><strong>Atharva Veda</strong> &ndash; Agarwood is mentioned as a sacred aromatic substance used in rituals for purification and divine offerings.</li>
        <li><strong>Ayurvedic Texts (Charaka Samhita, Sushruta Samhita)</strong> &ndash; Described as "Aguru", it is used for its medicinal properties, treating digestive issues, nervous disorders, and as an aphrodisiac.</li>
        <li><strong>Puranas (Agni Purana, Bhagavata Purana)</strong> &ndash; Agarwood is listed among precious materials used in worship (puja) and temple rituals. Lord Krishna is said to have a special affinity for Aguru incense.</li>
        <li><strong>Buddhist Texts (Mahayana Sutras)</strong> &ndash; Used in meditation and spiritual ceremonies to purify the environment and enhance focus.</li>
        </ol>
        <p>Agarwood is considered "Wood of the Gods" due to its divine fragrance and rarity.</p>

        <h3>Agarwood Oil: Description, Uses & Rarity</h3>
        <p><strong>1. Description of Agarwood Oil (Oud Oil)</strong><br />
        Source: Extracted from the resinous heartwood of <em>Aquilaria</em> trees infected by a specific mold (Phialophora parasitica).<br />
        Color: Dark amber to deep brown.<br />
        Aroma: Complex, woody, balsamic, with hints of sweetness, spice, and leather.<br />
        Texture: Thick, viscous (high-quality oil is almost syrupy).</p>

        <p><strong>2. Uses of Agarwood Oil</strong><br />
        <strong>Perfumery:</strong> One of the most expensive ingredients in luxury fragrances (e.g., Oud-based perfumes by Tom Ford, Amouage).<br />
        <strong>Aromatherapy:</strong> Promotes relaxation, reduces stress, and enhances meditation.<br />
        <strong>Traditional Medicine:</strong> Used in Ayurveda and Unani for pain relief, anti-inflammatory properties, and as an aphrodisiac.<br />
        <strong>Spiritual Practices:</strong> Burned in temples and during meditation for its purifying effects.</p>
    `,
    'ashvakarna-resin': `
        <h3>Ashwakarna Dhoopa – The Sacred Resin of the Shorea</h3>
        <p>In the annals of Vedic and Ayurvedic wisdom, the Ashwakarna tree stands as a mighty symbol of strength, protection, and purification. Its name, meaning “Horse’s Ear,” refers to the shape of its leaves.</p>
        <h4>Sacred References and Historical Significance</h4>
        <ul>
            <li><strong>The Vedas and Puranas:</strong> Ashwakarna is hailed as a sacred tree. Its resin is a traditional and vital ingredient in Homa and Yagna (sacred fire ceremonies). The smoke is believed to create a protective shield, ward off negative influences.</li>
            <li><strong>Ayurvedic Texts:</strong> Great sages like Charaka and Sushruta have documented the virtues of Ashwakarna for treating skin diseases and wound healing.</li>
        </ul>
        <h4>Multifaceted Uses and Benefits</h4>
        <ol>
            <li><strong>Spiritual Purification:</strong> The smoke of Ashwakarna Dhoopa is considered uniquely powerful for creating a protective barrier against negative energies (Vastu Shuddhi).</li>
            <li><strong>Respiratory Support:</strong> Its strong expectorant and anti-inflammatory properties are highly valued for clearing congestion, alleviating coughs, and colds.</li>
            <li><strong>Aromatic Experience:</strong> Earthy and Balsamic – A deep, rich, and resonant base note that is intensely grounding and calming.</li>
        </ol>
    `,
    'champak-oil': `
        <h3>Champak Essential Oil – Exotic Floral Fragrance for Mind & Body</h3>
        <p>Indulge in the rich, sweet, and intoxicating aroma of Champak Essential Oil, extracted from the rare Magnolia champaca flower. Known as the “Joy Perfume Tree,” this luxurious oil is cherished for its uplifting and therapeutic benefits.</p>
        <h4>Key Benefits:</h4>
        <ul>
            <li>🌿 <strong>Mood Enhancer</strong> – Relieves stress, anxiety, and promotes emotional balance.</li>
            <li>🌿 <strong>Aphrodisiac Properties</strong> – Enhances romance and sensuality.</li>
            <li>🌿 <strong>Skin & Hair Care</strong> – Helps nourish skin and adds shine to hair when diluted.</li>
            <li>🌿 <strong>Spiritual Upliftment</strong> – Used in meditation and rituals for positive energy.</li>
        </ul>
        <h4>How to Use:</h4>
        <ul>
            <li><strong>Aromatherapy:</strong> Add 2-3 drops to a diffuser for a calming ambiance.</li>
            <li><strong>Perfume:</strong> Blend with a carrier oil for a natural, long-lasting fragrance.</li>
            <li><strong>Massage Oil:</strong> Mix with coconut or jojoba oil for a soothing massage.</li>
        </ul>
    `,
    'chintamani-rasamani': `
        <h3>CHINTAMANI – The Wish-Fulfilling Gem!</h3>
        <p><em>“The Divine Alchemy of Desires, Destiny & Sacred Craftsmanship”</em></p>
        <h4>Sacred Combination</h4>
        <p>Crafted with Gold, Mercury (Parad), Silver, and the 9 Divine Ratnas (Navratnas), Chintamani is a celestial fusion of alchemy and cosmic energy.</p>
        <h4>Healing Powers</h4>
        <ul>
            <li><strong>Boosts mental clarity & focus</strong></li>
            <li><strong>Balances emotions & dissolves stress</strong></li>
            <li><strong>Attracts prosperity & positive vibes</strong></li>
        </ul>
        <h4>The Rare Art of Single Thread Symmetry (Nagabandhana Craft)</h4>
        <ul>
            <li><strong>Unbroken Perfection:</strong> woven in Vanyasiri RasaShala with a single continuous thread.</li>
            <li><strong>Symbolism:</strong> Represents cosmic harmony, unity & infinite flow of energy.</li>
        </ul>
    `,
    'gnana-rasa-silver': `
        <h3>Gnana Rasa – The Divine Elixir of Awakening</h3>
        <p>Ancient wisdom in a bottle – for clarity, vitality and spiritual connection. Sacred Origins Rooted in 5000-year-old Ayurvedic texts (Charaka Samhita, Sushruta Samhita).</p>
        <h4>Key Benefits</h4>
        <ul>
            <li><strong>For Mind:</strong> Sharpens memory and focus, enhances cognitive function.</li>
            <li><strong>For Spirit:</strong> Activates third eye and crown chakras, deepens meditation practice.</li>
            <li><strong>For Body:</strong> Nourishes skin, strengthens nervous system, promotes restful sleep.</li>
        </ul>
        <h4>How To Use</h4>
        <p>Apply 1 drop on:</p>
        <ul>
            <li>Temples (for focus)</li>
            <li>Third eye (for intuition)</li>
            <li>Wrists (for calm)</li>
        </ul>
    `,
    'gulab-oil-pink': `
        <h3>Gulab Oil (Pink) – The Divine Essence of Roses</h3>
        <p>In Ayurveda, Unani, and ancient Sanskrit texts, rose oil (known as Gulab Taila or Rosa damascena oil) is revered as “The Nectar of the Gods.”</p>
        <h4>Ancient & Vedic References</h4>
        <ul>
            <li><strong>Charaka Samhita:</strong> Describes rose oil as a cooling, heart-opening, and Pitta-balancing elixir.</li>
            <li><strong>Sushruta Samhita:</strong> Recommends it for skin healing, eye care, and mental calmness.</li>
            <li><strong>Unani Medicine:</strong> Calls it “Arq-e-Gulab,” used for heart health and emotional balance.</li>
        </ul>
        <h4>The “Wow Factor”</h4>
        <ul>
            <li>Only 1 kg of rose oil requires 4,000 kg of petals! (World’s most precious oil)</li>
            <li>Used by Cleopatra & Mughal Emperors for beauty & seduction.</li>
            <li>Spiritually charged – Used in temples to anoint deities (especially Goddess Lakshmi).</li>
        </ul>
    `,
    'gulab-oil-red': `
        <h3>Gulab Oil (Red) – The Divine Rose Elixir of the Ancients</h3>
        <p>“As the rose unfolds its petals, so does the soul awaken to divine love”</p>
        <h4>Sacred Origins in Vedic Scriptures</h4>
        <ol>
            <li><strong>Rig Veda</strong> mentions rose essence as “Soma-Raja” (King of Nectars)</li>
            <li><strong>Ayurvedic Texts</strong> describe it as <em>Hridaya-Vasini</em> (Heart’s Beloved) in Bhavaprakasha and <em>Pitta-Shamaka</em> (Cooling Fire) in Charaka Samhita.</li>
            <li><strong>Tantric Texts</strong> prescribe it for Awakening Anahata Chakra and Enhancing Rati-Sukta (Sacred Union).</li>
        </ol>
        <h4>7 Divine Uses</h4>
        <ul>
            <li><strong>Instant “Bridal Glow”:</strong> when applied to cheeks.</li>
            <li><strong>Stops cramps:</strong> in 7 minutes via navel application.</li>
            <li><strong>Lakshmi Attraction:</strong> Anoint currency notes every Friday.</li>
        </ul>
    `,
    'hanuman-chalisa-palm-leaf': `
        <h3>Hanuman Chalisa Palm Leaf Edition</h3>
        <p>The Hanuman Chalisa is a devotional hymn composed by the poet Goswami Tulsidas, revered for invoking courage, wisdom, and protection.</p>
        <ul>
            <li><strong>Bilingual text:</strong> features Hanuman Chalisa in Sanskrit and English.</li>
            <li><strong>Artisan craftsmanship:</strong> Each leaf is carefully inscribed and assembled using authentic methods.</li>
            <li><strong>Spiritual value:</strong> Ideal for meditation, chant, and as a distinctive addition to home altars.</li>
        </ul>
        <h4>About Palm Leaf Manuscripts</h4>
        <p>Palm leaf manuscripts are created from the leaves of certain palm trees, prized for their durability and longevity. Traditional preparation includes sun-drying, boiling in water or milk, and polishing with natural oils.</p>
    `,
    'holy-basil-tulsi-essential-oil': `
        <h3>Holy Basil (Tulsi) Essential Oil</h3>
        <p>Discover the soothing and uplifting benefits of Holy Basil Essential Oil, extracted from the sacred Tulsi plant. Known as the "Queen of Herbs" in Ayurveda.</p>
        <h4>Key Benefits:</h4>
        <ul>
            <li><strong>Stress Relief</strong> – Promotes relaxation and mental clarity.</li>
            <li><strong>Respiratory Support</strong> – Helps ease breathing and clear congestion.</li>
            <li><strong>Immune Boost</strong> – Supports natural immunity with its antimicrobial properties.</li>
            <li><strong>Spiritual Wellness</strong> – Enhances focus during meditation and prayer.</li>
        </ul>
        <h4>How to Use:</h4>
        <ul>
            <li><strong>Diffuser:</strong> Add a few drops for a calming atmosphere.</li>
            <li><strong>Topical Use:</strong> Dilute with a carrier oil for massage or skin application.</li>
        </ul>
    `,
    'jasmine-oil-mallika-taila': `
        <h3>Jasmine Oil (Mallika Taila) – The Moonlit Nectar of the Gods</h3>
        <p>“As the moon delights in jasmine, so do the gods delight in its fragrance” – Rig Veda</p>
        <h4>Vedic & Ancient References</h4>
        <ul>
            <li><strong>Atharva Veda:</strong> Calls jasmine (Mallika) the “Queen of Night-Blooming Flowers.”</li>
            <li><strong>Kamasutra:</strong> Lists jasmine oil as the ultimate erotic fragrance.</li>
            <li><strong>Bhavaprakasha Nighantu:</strong> Classifies it as “Sheeta Virya” (cooling energy).</li>
        </ul>
        <h4>The “Wow” Factor</h4>
        <ul>
            <li>1kg oil = 8 million flowers (Hand-picked at midnight).</li>
            <li>Cleopatra’s secret – Used to seduce Caesar by anointing her sails.</li>
            <li>The only oil that glows faint blue in moonlight.</li>
        </ul>
    `,
    'kadamba-oil': `
        <h3>Kadamba Oil – The Divine Celestial Nectar</h3>
        <p>“Where the Kadamba tree blooms, Lord Krishna dances” – Bhagavata Purana</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Bhagavata Purana:</strong> Describes Krishna’s Rasa-Leela under Kadamba trees. Considered the “Tree of Divine Play” (Lila-Vriksha).</li>
            <li><strong>Ayurvedic Texts:</strong> Bhavaprakasha calls it “Sarva-Roga-Nivarini” (All-disease-healer).</li>
            <li><strong>Tamil Siddha Tradition:</strong> Associated with Agastya Muni who used it for Astral travel (Siddhi).</li>
        </ul>
        <h4>7 Miraculous Uses</h4>
        <ul>
            <li><strong>Physical:</strong> Reverses grey hair (documented in Kashyapa Samhita), Fever breaker.</li>
            <li><strong>Spiritual:</strong> Opens Crown Chakra, Induces Lucid Dreams.</li>
        </ul>
    `,
    'kewda-pandanus': `
        <h3>Kewda Oil (Ketaki Tailam) – The Divine Fragrance of the Vedas</h3>
        <p>“The scent of Kewda opens the gates of Swarga” – Atharva Veda</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Atharva Veda:</strong> Calls Kewda the “Fragrance of Paradise.”</li>
            <li><strong>Matsya Purana:</strong> Describes Kewda flowers as Lord Vishnu’s favorite.</li>
            <li><strong>Brihat Samhita:</strong> Recommends Kewda oil for royal coronations and planetary peace rituals.</li>
        </ul>
        <h4>7 Divine Uses</h4>
        <ul>
            <li><strong>Physical:</strong> Instant cooling, Natural antidepressant.</li>
            <li><strong>Spiritual:</strong> Lakshmi Attractor, Yagna Enhancer, Past-life Recall.</li>
        </ul>
    `,
    'pink-lotus-oil': `
        <h3>Pink Lotus Oil (Padma Taila) – The Blossom of Enlightenment</h3>
        <p>“As the lotus rises pure from muddy waters, so does the soul awaken to divinity” – Bhagavad Gita</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Rig Veda:</strong> Calls lotus “Pankaja” (mud-born), symbolizing spiritual rebirth.</li>
            <li><strong>Padma Purana:</strong> Sacred to Goddess Lakshmi – blooms in her celestial gardens.</li>
            <li><strong>Sushruta Samhita:</strong> Classifies it as “Medhya Rasayana” (brain tonic).</li>
        </ul>
        <h4>The “Wow” Factor</h4>
        <ul>
            <li>1kg oil = 1 million hand-plucked petals (Harvested at 4AM).</li>
            <li>Only floral oil that floats on water.</li>
            <li>Cleopatra’s secret – added to sails to perfume Mediterranean winds.</li>
        </ul>
    `,
    'rajanighandha-oil': `
        <h3>Rajanighandha Oil – The Moonlit Elixir of Divine Fragrance</h3>
        <p>“As the moon reigns over the night, Rajanighandha perfumes the darkness with celestial grace.” – Atharva Veda</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Bhavaprakasha Nighantu:</strong> Revered as “Ratri-Raja” (King of Night Flowers).</li>
            <li><strong>Sushruta Samhita:</strong> Classified as “Sheeta Virya” (cooling energy). Prescribed for rejuvenation.</li>
            <li><strong>Tamil Siddha Texts:</strong> Used in alchemical mercury fixation processes.</li>
        </ul>
        <h4>The “Wow” Factor</h4>
        <ul>
            <li>1kg oil = 1 million hand-picked night-blooming flowers (10 PM–2 AM).</li>
            <li>Only floral oil that intensifies in fragrance when heated.</li>
        </ul>
    `,
    'rala-dhoopa': `
        <h3>Rala Dhoopa – Sacred Resin of the Shorea robusta</h3>
        <p>Commonly known as Sal Resin, Rala Dhoopa is one of the most ancient resins used in Indian spiritual traditions for its powerful cleansing and protective qualities.</p>
        <h4>Spiritual Significance</h4>
        <ul>
            <li><strong>Vedic Rituals:</strong> Essential for Homa and Yagna rituals to purify the atmosphere.</li>
            <li><strong>Psychic Shield:</strong> Believed to clear heavy energies and protect against negative influences.</li>
        </ul>
        <h4>Health Benefits</h4>
        <ul>
            <li><strong>Respiratory:</strong> Clears the air of pathogens and supports healthy breathing.</li>
            <li><strong>Mental Clarity:</strong> Provides a grounding atmosphere for deep work and meditation.</li>
        </ul>
    `,
    'rasa-mani': `
        <h3>Divine Elixir Gem – The Ultimate Healing Jewel</h3>
        <p>Crafted from purified mercury and infused with rare, high-vibrational elements, the <strong>Divine Elixir Gem</strong> is a masterpiece of alchemical artistry.</p>
        <h4>Healing Benefits</h4>
        <ul>
            <li><strong>Boosts Immunity & Vitality</strong> – Strengthens the body’s natural defenses.</li>
            <li><strong>Deep Detoxification</strong> – Purifies the blood and removes heavy metals.</li>
            <li><strong>Calms the Nervous System</strong> – Reduces stress, anxiety, and insomnia.</li>
        </ul>
        <h4>Spiritual Benefits</h4>
        <ul>
            <li><strong>Deepens Meditation & Intuition</strong> – Opens the third eye and crown chakra.</li>
            <li><strong>Protects Against Negative Energies</strong> – Acts as a powerful shield.</li>
        </ul>
    `,
    'raw-wild-honey': `
        <h3>Raw Wild Honey – The Untamed Essence of Nature</h3>
        <p>Sourced from the heart of untouched forests and meticulously collected by skilled tribal communities. Harvested from wild beehives nestled in dense, unpolluted jungles.</p>
        <h4>Highlights</h4>
        <ul>
            <li><strong>100% Natural:</strong> Free from additives, preservatives, and artificial processing.</li>
            <li><strong>Nutrient Rich:</strong> Retains its natural enzymes and antioxidants.</li>
            <li><strong>Traditional Harvesting:</strong> Ethically sourced following millennia-old tribal wisdom.</li>
        </ul>
    `,
    'sandal-wood-100gm': `
        <h3>100% Pure Sandalwood – Ethical & Sacred</h3>
        <p>Enhance your wellness and spiritual rituals with our 100% pure Sandalwood (100g), known for its rich, woody aroma and cooling properties.</p>
        <h4>Key Features</h4>
        <ul>
            <li>✔ <strong>100% Natural & Pure</strong> – Free from additives or synthetic fragrances.</li>
            <li>✔ <strong>Soothing & Calming</strong> – Perfect for relaxation and mental clarity.</li>
            <li>✔ <strong>Versatile Use</strong> – Ideal for making incense, face packs, and spiritual offerings.</li>
        </ul>
        <h4>Spiritual Importance</h4>
        <p>Sandalwood is essential for anointing deities and is believed to attract divine energy while cooling the mind during meditation.</p>
    `,
    'sandal-wood-oil': `
        <h3>Pure Sandalwood Oil – Luxurious, Therapeutic & Divine</h3>
        <p>Experience the enchanting essence of premium sandalwood oil, revered in Ayurveda for its exquisite woody fragrance and deep healing benefits.</p>
        <h4>Key Features</h4>
        <ul>
            <li>✔ <strong>Therapeutic Grade:</strong> Known to reduce stress, enhance focus, and uplift mood.</li>
            <li>✔ <strong>Skin Care:</strong> Nourishes the skin and soothes irritation.</li>
            <li>✔ <strong>Spiritual Use:</strong> Enhances yoga, meditation, and sacred rituals with its calming aura.</li>
        </ul>
        <h4>How to Use</h4>
        <ul>
            <li><strong>Meditation:</strong> Apply a drop on the wrists or temples for deep focus.</li>
            <li><strong>Perfume:</strong> A natural, long-lasting fragrance for a sophisticated aura.</li>
        </ul>
    `,
    'vetiver-root-oil': `
        <h3>Vetiver Root Oil (Ushira Taila) – The Earth’s Cooling Veins</h3>
        <p>“As the vetiver’s roots dive deep into Earth’s womb, so does its oil draw up primordial healing.” – Atharva Veda</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Charaka Samhita:</strong> Classified as “Shita Virya” (intensely cooling). Prescribed for heat strokes and Pitta disorders.</li>
            <li><strong>Bhavaprakasha Nighantu:</strong> Calls it “Bhumi-Shataavari” (Earth’s hundred-rooted healer).</li>
            <li><strong>Tamil Siddha Texts:</strong> Used to stabilize mercury in alchemy and prolong meditation.</li>
        </ul>
        <h4>The “Wow” Factor</h4>
        <ul>
            <li>1kg oil = 100kg roots (Harvested after 24 months).</li>
            <li>Only oil that becomes more fragrant with age (10-year-old oil is most prized).</li>
            <li>Cooling secret – used in royal palaces to cool chambers naturally.</li>
        </ul>
    `,
    'white-champaka-oil': `
        <h3>White Champaka Oil – The Celestial Moonlight Essence</h3>
        <p>“As the moon wears a halo of light, the White Champaka perfumes the night” – Atharva Veda</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Bhagavata Purana:</strong> Describes Krishna’s flute being adorned with White Champaka garlands.</li>
            <li><strong>Shiva Purana:</strong> Sacred to Lord Shiva – the only flower that blooms without sunlight.</li>
            <li><strong>Charaka Samhita:</strong> Classified as “Tridosha Shamaka” (balances all humors).</li>
        </ul>
        <h4>7 Divine Uses</h4>
        <ul>
            <li><strong>Physical:</strong> Instant migraine relief, Lunar cycle regulator.</li>
            <li><strong>Spiritual:</strong> Crown Chakra Opener, Psychic Protection, Past-Life Recall.</li>
        </ul>
    `,
    'white-lotus-oil': `
        <h3>White Lotus Oil (Pundarika Taila) – The Nectar of Divine Purity</h3>
        <p>“As the white lotus floats untouched by water, so does the wise live untouched by worldly illusion” – Bhagavad Gita</p>
        <h4>Vedic & Ancient Scriptural References</h4>
        <ul>
            <li><strong>Rig Veda:</strong> Hymns praise white lotus as “Soma’s Cup” – the vessel of divine nectar.</li>
            <li><strong>Brahma Purana:</strong> Emerged from Vishnu’s navel as Brahma’s seat.</li>
            <li><strong>Sushruta Samhita:</strong> Classified as “Shiva Virya” (cooling potency).</li>
        </ul>
        <h4>The “Wow” Factor</h4>
        <ul>
            <li>1kg oil = 1.2 million predawn petals (Harvested under moonlight).</li>
            <li>Only oil that crystallizes into snowflakes below 10°C.</li>
            <li>Emperor Ashoka’s secret – mixed with moonstone dust for enlightenment.</li>
        </ul>
    `,
    'wild-stingless-bees-honey': `
        <h3>Indian Stingless Bee Honey (Pathala Madhu)</h3>
        <p>A rare medicinal honey produced by India’s smallest bees (Tetragonula iridipennis). In Ayurveda, it is revered as “Pathala Madhu” (underground honey), considered the “Mother of Medicine.”</p>
        <h4>Scientific & Vedic Perspective</h4>
        <ul>
            <li><strong>Antimicrobial Power:</strong> Higher phenolic content than regular honey, offering strong wound-healing benefits.</li>
            <li><strong>Low Glycemic Index:</strong> Doesn’t spike blood sugar like commercial honey, ideal for diabetics.</li>
            <li><strong>Unique Taste:</strong> Sour-sweet with a tangy aftertaste due to natural fermentation.</li>
        </ul>
        <h4>Why is it So Rare?</h4>
        <p>Tiny colonies produce only 200g per year. Harvested from wild beehives in dense jungles across India.</p>
    `,
    'yaksha-dhoopa': `
        <h3>Chilaka Dhoopa – The Sacred Resin of the Boswellia Tree</h3>
        <p>Known in sacred texts as Shallaki, Sushruta, and Gajabhakshya, this resin is the cornerstone of spiritual rituals and holistic wellness.</p>
        <h4>Historical Significance</h4>
        <ul>
            <li><strong>The Vedas & Puranas:</strong> Primary ingredient in Homa and Yagna ceremonies to carry prayers to the Devas.</li>
            <li><strong>Ayurvedic Texts:</strong> Classified as a Tridoshic herb, beneficial for balancing Vata, Pitta, and Kapha.</li>
        </ul>
        <h4>Therapeutic Smoke</h4>
        <ul>
            <li><strong>Respiratory Health:</strong> Potent anti-inflammatory properties help clear asthma and congestion.</li>
            <li><strong>Pain Relief:</strong> Contains boswellic acids to help reduce joint pain and stiffness.</li>
        </ul>
    `,
    'palm-leaf-engraving-narasimha': `
        <h3>Palm Leaf Engraving (Lakshmi Narasimha Swamy)</h3>
        <p>A sacred and intricate work of art featuring the divine Lakshmi Narasimha Swamy, etched onto hand-prepared palm leaves. This traditional craft preserved for centuries brings protection and auspicious energy to your space.</p>
        <h4>Sacred Craftsmanship</h4>
        <ul>
            <li><strong>Ancestral Techniques:</strong> Engraved using a traditional stylus (lekhani) and natural soot-based ink.</li>
            <li><strong>Durable & Sacred:</strong> Palm leaves are cured using herbal infusions of turmeric and oils to last for generations.</li>
            <li><strong>Devotional Art:</strong> Perfect for home temples or as a spiritually significant gift.</li>
        </ul>
    `,
    'natural-navaratna-stone-set': `
        <h3>Natural Navراتna Stones for Main Door Protection</h3>
        <p>Welcome divine energy and shield your home with our Authentic Natural Navratna Stone Set. This sacred collection of nine genuine gemstones harnesses Vedic wisdom to create a protective energy grid at your main entrance.</p>
        <h4>Vedic Protection</h4>
        <p>Each stone—Ruby, Pearl, Red Coral, Emerald, Yellow Sapphire, Diamond, Blue Sapphire, Hessonite Garnet, and Cat’s Eye —is carefully selected for purity and energetic potency. Ideal for homes and businesses to balance planetary influences.</p>
        <h4>Installation</h4>
        <p>The set includes nine natural gemstones and a sacred red cloth pouch. Installation is simple—place above the main door during an auspicious time for lasting energetic protection.</p>
    `
};

products = products.map(p => {
    // Exact ID matching
    if (descriptions[p.id]) {
        p.longDescription = descriptions[p.id];
    }
    // Fallback for Agarwood variations (Divine, Copper, Gold, Silver)
    else if (p.id.includes('agar-wood-oil')) {
        p.longDescription = descriptions['agar-wood-oil'];
    }
    return p;
});

fs.writeFileSync(productsFile, JSON.stringify(products, null, 4));
console.log('Successfully updated longDescriptions for ALL products with corrected IDs.');
