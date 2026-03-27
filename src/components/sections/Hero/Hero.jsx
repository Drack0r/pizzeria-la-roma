"use client";

import { Button } from "@/components/ui/Button";

import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background video */}
      <video
        src="/videos/pizza.mp4"
        autoPlay
        muted
        loop
        className={styles.background}
      ></video>

      {/* Background overlay */}
      <div className={styles.overlay}></div>

      {/* Informations */}
      <div className={styles.informations}>
        <p>14 Rue Galvani, 91300 Massy</p>
        <p>01.56.21.13.18</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Card */}
        <article className={styles.card}>
          <h1>Bienvenue à La Roma !</h1>
          <p>
            Découvrez nos délicieuses pizzas artisanales préparées avec passion.
          </p>
          <p>
            Venez déguster une expérience culinaire authentique et inoubliable.
          </p>
        </article>

        {/* Actions */}
        <div className={styles.buttons_container}>
          <Button
            variant="dark"
            onClick={() => alert("Vous passez commande")} // todo : add feature
          >
            Commander
          </Button>

          <Button
            onClick={() => alert("Vous êtes redirigé vers le menu")} // todo : add feature
          >
            Notre carte
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
