/**
 * Action creator qui permet simplement de rajouter un employee qu'il recoit en paramètre au
 *
 * @param {*} employee
 */
export const ajoutEmployee = (employee) => ({
  type: "AJOUTER_EMPLOYEE",
  employee,
});
