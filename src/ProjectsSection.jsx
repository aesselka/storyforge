import React from 'react';

function ProjectsSection() {
  return (
    <section className="projects-section fade-in">
      <h2 className="section-title">Наши работы</h2>

      {/* Работа 1 */}
      <div className="project-block">
        <div className="project-image">
          <img src="/fivefeet.png" alt="Five Feet Apart" />
        </div>
        <div className="project-text">
          <h3>Five Feet Apart</h3>
          <p>
            История двух подростков, страдающих муковисцидозом, которым нельзя приближаться друг к другу ближе чем на пять футов. Несмотря на преграды, между ними рождается глубокая связь.
          </p>
        </div>
      </div>

      {/* Работа 2 */}
      <div className="project-block">
        <div className="project-image">
          <img src="/loverosie.jpg" alt="Love, Rosie" />
        </div>
        <div className="project-text">
          <h3>Love, Rosie</h3>
          <p>
            История о дружбе и любви, испытанных временем и расстоянием. Рози и Алекс ищут путь друг к другу через годы недопониманий и перемен в жизни.
          </p>
        </div>
      </div>

    </section>
  );
}

export default ProjectsSection;
