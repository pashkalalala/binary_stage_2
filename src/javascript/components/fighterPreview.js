import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  if (fighter) {
    const fighterImg = createFighterImage(fighter);
    const fighterInfo = createElement({
      tagName: 'div',
      className: 'fighter-info__card'
    });
    const fighterName = createElement({
      tagName: 'h2',
      className: 'fighter-info__title'
    });
    fighterName.innerText = fighter.name;
    const fighterData = createFighterData(fighter);
    fighterInfo.append(fighterName, fighterData);
    fighterElement.append(fighterImg, fighterInfo);
  }
  // todo: show fighter info (image, name, health, etc.)

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}

function createFighterData(fighter) {
  const fighterData = createElement({
    tagName: 'div',
    className: 'fighter-data'
  });
  const healthIndicator = createFighterDataIndicator('health', fighter.health);
  const attackIndicator = createFighterDataIndicator('attack', fighter.attack);
  const defenseIndicator = createFighterDataIndicator('defense', fighter.defense);
  fighterData.append(healthIndicator, attackIndicator, defenseIndicator);
  return fighterData;
}

function createFighterDataIndicator(label, value) {
  const indicator = createElement({
    tagName: 'div',
    className: 'fighter-data__indicator'
  });
  const icon = createDataIcon(label);
  const valueElement = createElement({
    tagName: 'p'
  });
  valueElement.innerText = value;
  indicator.append(icon, valueElement);
  return indicator;
}

function createDataIcon(label) {
  return createElement({
    tagName: 'img',
    className: `fighter-data__icon ${label}`
  });
}
