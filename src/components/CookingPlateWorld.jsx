import Image from 'next/image';
import styles from './cookingPlateWorld.module.css'

export default function CookingPlateWorld() {
  return (
    <>
      <div className={styles.indexPresentation}>
        <div className={styles.animation}>
          {/* World */}
          <Image
            className={styles.world}
            src="/world.gif"
            width={200}
            height={200}
            alt="Ramone logo" />

          {/* Cooking Plate */}
          <Image
            className={styles.cookingPlate}
            src="/cooking_plate.svg"
            width={400}
            height={220}
            alt="Ramone logo" />
        </div>

        {/* Ramone */}
        <Image
          className={styles.chef}
          src="/ramone.png"
          width={440}
          height={280}
          alt="ramone picture" />
      </div>
    </>
  )
}