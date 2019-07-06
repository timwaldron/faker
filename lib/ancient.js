const utils = require('../utils');

const ancient = {
  god() {
    return utils.draw(["Aphrodite", "Apollo", "Ares", "Artemis", "Athena", "Demeter", "Dionysus", "Hades", "Hephaestus", "Hera", "Hermes", "Hestia", "Poseidon", "Zeus"])
  },
  primordial() {
    return utils.draw(["Aion", "Aether", "Ananke", "Chaos", "Chronos", "Erebus", "Eros", "Hypnos", "Nesoi", "Uranus", "Gaia", "Ourea", "Phanes", "Pontus", "Tartarus", "Thalassa", "Thanatos", "Hemera", "Nyx", "Nemesis"])
  },
  titan() {
    return utils.draw(["Coeus", "Crius", "Cronus", "Hyperion", "Iapetus", "Mnemosyne", "Oceanus", "Phoebe", "Rhea", "Tethys", "Theia", "Themis", "Asteria", "Astraeus", "Atlas", "Aura", "Clymene", "Dione", "Helios", "Selene", "Eos", "Epimetheus", "Eurybia", "Eurynome", "Lelantos", "Leto", "Menoetius", "Metis", "Ophion", "Pallas", "Perses", "Prometheus", "Styx"])
  },
  hero() {
    return utils.draw(["Abderus", "Achilles", "Aeneas", "Ajax", "Amphitryon", "Antilochus", "Bellerophon", "Castor", "Chrysippus", "Daedalus", "Diomedes", "Eleusis", "Eunostus", "Ganymede", "Hector", "Hercules", "Icarus", "Iolaus", "Jason", "Meleager", "Odysseus", "Orpheus", "Pandion", "Perseus", "Theseus", "Alcestis", "Amymone", "Andromache", "Andromeda", "Antigone", "Arachne", "Ariadne", "Atalanta", "Briseis", "Caeneus", "Cassandra", "Cassiopeia", "Clytemnestra", "Danaë", "Deianeira", "Electra", "Europa", "Hecuba", "Helen", "Hermione", "Iphigenia", "Ismene", "Jocasta", "Medea", "Medusa", "Niobe", "Pandora", "Penelope", "Phaedra", "Polyxena", "Semele", "Thrace"])
  },
};

module.exports = ancient

